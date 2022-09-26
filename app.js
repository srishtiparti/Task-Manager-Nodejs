//const port = process.env.PORT || 3000

const express = require('express')
const app = express()
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/task')
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/errorHandler')


/***********************  Database  ******************************************/
const connectDB = require('./DB/connect')
require('dotenv').config()

/***********************  Middleware  ******************************************/
app.use(express.static('./public'))
app.use(express.json())
app.use('/api/v1', routes)

/***********************  Route  ******************************************/

app.use(notFound);
app.use(errorHandlerMiddleware);
const port = process.env.PORT || 8080
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