//const port = process.env.PORT || 3000

const express = require('express')
const app = express()
const books = require('./routes/task')
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/errorHandler')


/***********************  Database  ******************************************/
const connectDB = require('./DB/connect')
require('dotenv').config()

/***********************  Middleware  ******************************************/
app.use(express.static('./public'))
app.use(express.json())
    // for 404 error
    //app.use(notFound)
    // for 500 error
app.use(errorHandlerMiddleware)

/***********************  Routes  ******************************************/
app.use('/api/v1', books)
const port = process.env.PORT || 3000
    /***********************  Connecting to DB first before listening  ******************************************/
const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () =>
            console.log(`Server is listening on port ${port}...`)
        );
    } catch (error) {
        console.log(error);
    }
};

start()