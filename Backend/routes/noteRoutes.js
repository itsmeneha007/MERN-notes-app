const express = require('express')
const router = express.Router()
const{getNotes, createNote, updateNote, deleteNote} = require('../controllers/noteControllers')

const auth = require('../middleware/authMiddleware')

router.use(auth)
router.get('/', getNotes)
router.post('/', createNote)
router.put('/:id', updateNote)
router.delete('/:id', deleteNote)

module.exports = router;