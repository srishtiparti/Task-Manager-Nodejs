const Task = require('../starter/models/task')
const asyncWrapper = require('../starter/middleware/async')
const { createCustomError } = require('../starter/errors/custom-error')


const getAllTasks = asyncWrapper(async(req, res) => {
    const tasks = await Task.find({})
    res.status(200).json({ tasks })
        // res.status(200).json({ tasks, amount:tasks.length })
        // res.status(200).json({status:"success", data:{tasks, amount:tasks.length}})
})

const createTasks = asyncWrapper(async(req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
})

const getTask = asyncWrapper(async(req, res, next) => {
    const { id: taskID } = req.params
    const task = await Task.findOne({ _id: taskID }).exec();
    if (!task) {
        return next(createCustomError(`No task with ${taskID} ID`, 404))
    }
    res.status(201).json({ task })

})

const updateTask = asyncWrapper(async(req, res) => {
    const { id: taskId } = req.params
    const { name: taskName } = req.body
    const { completed: status } = req.body
        // res.json({data:req.body})
        // console.log(taskId, taskName, status)
    const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
        new: true, //to return the new value
        runValidators: true,
    })
    if (!task) {
        return next(createCustomError(`No task with ${taskId} ID`, 404))
    }
    res.status(201).json({ task })

})

const deleteTask = asyncWrapper(async(req, res) => {
    const { id: taskId } = req.params
    const task = await Task.findOneAndDelete({ _id: taskId })
    if (!task) {
        return next(createCustomError(`No task with ${taskId} ID`, 404))
    }
    res.status(201).json({ task })
})

module.exports = { getAllTasks, createTasks, getTask, updateTask, deleteTask }