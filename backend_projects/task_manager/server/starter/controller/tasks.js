const Task= require('../models/task');

const getAllTask = (req, res)=>{
    res.send("All Items fetched");
}
const getTask =(req, res) => {
    res.send('Task fetched');
}

const createTask = async (req, res) =>{
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task});
    } catch (error) {
        res.status(500).json({"msg": error})        
    }
    
}

const updateTask =(req, res) => {
    res.send("Task updated");
}

const deleteTask =(req, res)=>{
    res.send('Task Deleted');
}

module.exports ={
    getAllTask, 
    getTask, 
    createTask, 
    updateTask, 
    deleteTask
}