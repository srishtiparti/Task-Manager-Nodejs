const express = require('express')
const router = express.Router();

const {
    getAllTasks,
    createTasks,
    getTask,
    updateTask,
    deleteTask
} = require('../controllers/task')

const {
    getAllBooks,
    createBook,
    getBook,
    updateBook,
    deleteBook
} = require('../controllers/book')


router.route('/tasks/').get(getAllTasks).post(createTasks)
router.route('/tasks/:id').get(getTask).patch(updateTask).delete(deleteTask)
router.route('/books/').get(getAllBooks).post(createBook)
router.route('/books/:id').get(getBook).patch(updateBook).delete(deleteBook)

module.exports = router