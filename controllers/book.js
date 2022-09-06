const Book = require('../models/book')
const { createCustomError } = require('../errors/customAPIError')
const asyncWrapper = require('../middleware/async')

const getAllBooks = asyncWrapper(async(req, res) => {

    const books = await Book.find({})
    res.status(201).json({ books })
})

const createBook = asyncWrapper(async(req, res) => {
    const book = await Book.create(req.body)
    res.status(201).json({ book })

})

const getBook = asyncWrapper(async(req, res, next) => {
    const { id } = req.params
    const book = await Book.findOne({ _id: id })
    if (!book) {
        return next(createCustomError(`No book with this id`, 404))
    }
    res.status(201).json({ book })
})


const updateBook = asyncWrapper(async(req, res, next) => {
    const { id } = req.params
    const { name: taskName } = req.body
    const { completed: status } = req.body
    const book = await Book.findOneAndUpdate({ _id: id }, req.body, {
        new: true, //to return the new value
        runValidators: true,
    })
    if (!book) {
        return next(createCustomError(`No book with this id`, 404))
    }
    res.status(201).json({ book })

})

const deleteBook = asyncWrapper(async(req, res, next) => {

    const { id } = req.params
    const book = await Book.findOneAndDelete({ _id: id });
    if (!book) {
        return next(createCustomError(`No book with ${id}`, 404))
    }
    res.status(201).json({ book })
})

module.exports = { getAllBooks, createBook, getBook, updateBook, deleteBook }