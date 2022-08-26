const Task = require('../starter/models/task')

const getAllTasks = async(req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json({ tasks })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: error })
    }
}

const createTasks = async(req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const getTask = async(req, res) => {
    try {
        const { id: taskID } = req.params
        const task = await Task.findOne({ _id: taskID }).exec();
        if (!task) {
            return res.status(404).json({ msg: `No task with ${taskID} ID` })
        }
        res.status(201).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }

}

const updateTask = async(req, res) => {
    try {
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
            return res.status(404).json({ msg: `No task with ${taskID} ID` })
        }
        res.status(201).json({ task })

    } catch (error) {
        res.status(500).json({ msg: error })
    }

}

const deleteTask = async(req, res) => {
    try {
        const { id: taskId } = req.params
        const task = await Task.findOneAndDelete({ _id: taskId })
        if (!task) {
            return res.status(404).json({ msg: `No task with ${taskId} ID` })
        }
        res.status(201).json({ task })

    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

module.exports = { getAllTasks, createTasks, getTask, updateTask, deleteTask }