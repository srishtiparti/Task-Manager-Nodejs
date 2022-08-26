// Create controller and routes
// Import the controller to the routes and routes to server
// npm install mongoose
// Connect to DB first and then server 
// In order to connect to DB
// Go to MongoDB atlas
// Create Organization
// New Projects
// Build a Database
// create cluster
// set username and password -Database access
// Allow access from anywhere - network access
// Go to DB click connect
// connect your application
// Copy URL
//  eg -mongodb+srv://srish:<password>@cluster0.5gwaqis.mongodb.net/?retryWrites=true&w=majority
// add password instead of <password>
// add DB name in /?
// click cluster -> collection
// Load sample dataset/Add my own data to create dB
// Add Database name, Collection name
// Insert document to add values
// click + sign next to database to add another list


/******************** ENV **********************/
// To make sure you don't share passwords - use .env files
// npm install dotenv
// in .gitignore add .env
// create .env file and add the URL with the password
// create .env file in the same directory of your app.js (where you're creating your server)
// add all the secret values
// In your server file/app.js
// require('dotenv').config
// In your async function - which we were using so that we can connect to DB first and if it succeeds then run the server
// in await give the value using process.env.name_of_secret_variable



/********************** Models and schema ******************************/
// bare minimum for the database we need is schema type and key name
//  for schema typer - check mongoose docs, schema type 
// MongoDB we dont have strurctured data
// Step-1 Create a model
// Step-2 import mongoose module (require('mongoose'))
// Create Schema (new mongoose.Schema({ 
//    key:schema,
//    Key:schema.....
//}))
// export module -> module.exports = mongoose.model('name_of_schema',schema)
// instace of model is called a document -https://mongoosejs.com/docs/models.html
// Only the things that are mentioned in schema are considered, rest are ignored
// This is how schema makes the database structured


// Create Task/ Create
// import the model in the controller
// const task = await model_name.create(req.body)
//     res.status(201).json({ task })
// Remember await is always used with async and Try and catch

// Validation to the schema
// in schema we can add validation for the keys
// eg - name: {
//     type: String,
//     required: [true, 'must be provided'],
//     trim: true,
//     maxlength: [20, 'name can not be more than 20']
// }, completed: {type : boolean , default:false}

// Mongoose query for more information on all the operators
// Mongoose models provide several static helper functions for CRUD operations. Each of these functions returns a mongoose Query object.
// Model.deleteMany()
// Model.deleteOne()
// Model.find()
// Model.findById()
// Model.findByIdAndDelete()
// Model.findByIdAndRemove()
// Model.findByIdAndUpdate()
// Model.findOne()
// Model.findOneAndDelete()
// Model.findOneAndRemove()
// Model.findOneAndReplace()
// Model.findOneAndUpdate()
// Model.replaceOne()
// Model.updateMany()
// Model.updateOne()

// Read
// Get all documents - Model.find()

// get single task
// Model.findOne()
// Get the param id that needs to be looked up
// use findOne with await
// If you're looking for id.. use _id: in findOne to avoid error
// We have 2 errors - The id is in format - the number of digits/alphabets are what mongoose has to make id -error 404 - id not found
// If the id is not in format, has less/more digits - its 500 - get the error for the mongoose

// Delete task
// await Character.findOneAndDelete({ name: 'Eddard Stark' }); // returns {deletedCount: 1}

// Update Task
// Find the task
// findOneAndUpdate({key: 'value',req.body,options})
// options are used because old values are visible
// in order to update the original value and run validators
// options look like - {new:true, runValidators: true,}

/************** Check List for the Project ****************/
// Get node ready
// npm init
// npm install
// npm install express --save
// create server
// create routes
// create controller
// create project on Atlas in organization
// create cluster
// add network and user access
// copy URL from connect
// install mongoose and dotenv
// create database connect in your project and import mongoose, export the the connection
// create .env file for the secret link
// import .env (must be in same directory as server)
// create model and schema
// import the model in the controller
// make desrired operators (get/put/patch/post/delete)
// get all the tasks app.get('/api/v1/tasks') 
// create new task app.post
// get single task app.get("/:id")
// update task app.patch('/:id')
// delete task app.delete('/:id')


/******************* Put vs Patch *********************/
// both are used to update data
// put is used when everything, all params need to be updated // complete update
// patch is used when selected params need to be updated // partial update

/**********************  Customize 404 error *******************************/
// create a middleware
// import in server

/******************* async wrapper *********************************/
// Instead of using try and catch for all functions, just use it in middleware and import it in controller

/********************** Customize error handler *****************/
// Express has default error handling
// For more info -https://expressjs.com/en/guide/error-handling.html
// eg -app.get('/user/:id', async (req, res, next) => {
//   const user = await getUserById(req.params.id)
//   res.send(user)
// })