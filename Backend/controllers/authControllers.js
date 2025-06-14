const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

exports.signup = async (req, res) => {
    const {name, email, password } = req.body

    try{
        const existingUser = await User.findOne({ email })
        if (existingUser) 
            return res.status(400).json({message: "Email already existx"})

        const hashedPassword = await bcrypt.hash(password, 10)
        const user = new User({name, email, password: hashedPassword})

        await user.save()

        res.status(201).json({message: "User created succesfully"})
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

exports.login = async (req, res) => {
    const { email, password } = req.body

    try{
        const user = await User.findOne({email})
        if (!user)
             return res.status(400).json({message : "Invalid credentials"})
        
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch)
            return res.status(400).json({message: "Invalid Credentials match"})

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {
            expiresIn: '7d'
        })
        res.json({token})
    }catch(err){
        res.status(500).json({message: err.message})
    }
}