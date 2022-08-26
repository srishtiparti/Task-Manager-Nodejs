const express = require('express')
const app = express();
const tasks = require('./routes/task')

// Setting up port value
// const port = process.env.PORT || 3000
const port = process.env.PORT || 3000


const connectDB = require('./starter/DB/connect')
require('dotenv').config()
const notFound = require('./starter/middleware/not-found')
const errorHandlerMiddleware = require('./starter/middleware/error-handler')
    // middleware
app.use(express.json())
app.use(express.static('./starter/public'))

// routes
app.use('/api/v1/tasks', tasks)

// handling 404 errors
app.use(notFound)
app.use(errorHandlerMiddleware)

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on port ${port} `))
        app
    } catch (error) {
        console.log(error)
    }
}

start()