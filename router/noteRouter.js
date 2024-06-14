const express = require('express')
const noteRouter = express.Router()
const verifyToken = require('../middlewares/verifyToken')
const { createNote, getAllNote, updateNote, deleteNote } = require('../controller/noteController')

noteRouter.route('/create').post(verifyToken,createNote)
noteRouter.route('/all').get(verifyToken,getAllNote)
noteRouter.route('/:id').put(verifyToken,updateNote)
noteRouter.route('/:id').delete(verifyToken,deleteNote)


module.exports = noteRouter

