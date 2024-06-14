const Note = require("../model/noteSchema");


const createNote = async (req, res) => {
    try {
        const note = await Note.create(req.body)
        res.status(201).json({
            message: 'Success',
            data: note
        })
    } catch (error) {
        console.log(error);
    }
}

const getAllNote = async(req,res) =>{
    try {
        const getData = await Note.find()
        res.status(201).json({
            message: 'Success',
            data: getData
        })
    } catch (error) {
        console.log(error);
    }
}

const updateNote = async (req, res) => {
    try {
        const update = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json({
            message: 'Success',
            data: update
        })
    } catch (error) {
        console.log(error);
    }
}

const deleteNote = async (req, res) => {
    try {
        const noteId = req.params.id
        const deleted = await Note.findByIdAndDelete(noteId)
        res.status(200).json({
            message: 'deleted',
            data: deleted
        })
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    createNote,
    updateNote,
    deleteNote,
    getAllNote
}