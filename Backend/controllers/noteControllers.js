const Note = require('../models/Note')

exports.getNotes = async (req, res) => {
    try{
        const notes = await Note.find({user: req.userId}).sort({createdAt: -1})
        res.json(notes)
    }catch(err){
        res.status(500).json({message: err.message})
    }
} 

exports.createNote = async (req, res) => {
    const {title, content} = req.body
    try{
        const note = new Note({user: req.userId, title, content})
        await note.save()
        res.status(201).json(note)
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

exports.updateNote = async (req, res) => {
    const {id} = req.params
    const {title, content} = req.body

    try{
        const note = await Note.findOneAndUpdate(
            {_id: id, user: req.userId},
            {title, content},
            {new: true} 
        )
        if(!note)
            return res.status(404).json({message: "Note not found"})
        res.json(note)
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

exports.deleteNote = async(req, res) => {
    try{
        const note = await Note.findOneAndDelete({_id: req.params.id, user: req.userId})
        if(!note)
            return res.status(404).json({message: "Note not found yet"})
        res.json({message: "Note deleted successfully"})
    }catch(err){
        res.status(500).json({message: err.message})
    }
}