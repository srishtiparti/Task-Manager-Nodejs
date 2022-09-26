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

const {
    getHomepage,
    createReceipt,
    getAuthor,
    getAllOrders,
} = require('../controllers/perfume')

const { login, dashboard } = require('../controllers/main')

const authenticationMiddleware = require('../middleware/auth')

// JWT
router.route('/dashboard').get(authenticationMiddleware, dashboard)
router.route('/login').post(login)

// Task MAnager
router.route('/tasks/').get(getAllTasks).post(createTasks)
router.route('/tasks/:id').get(getTask).patch(updateTask).delete(deleteTask)

// Book Club
router.route('/books/').get(getAllBooks).post(createBook)
router.route('/books/:id').get(getBook).patch(updateBook).delete(deleteBook)
router.route('/').get(getHomepage)
router.route('/receipt').post(createReceipt)
router.route('/author').get(getAuthor)
router.route('/allorders').get(getAllOrders)

module.exports = router