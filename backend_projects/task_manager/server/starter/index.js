const express = require('express');
const tasks = require('./routes/tasks')
const connectDb = require('./connection/db');
require('dotenv').config();
const app = express();
const port = 3000;

//middleware
//exprress.json() is builtin middleware in express to read data from req body
app.use(express.json());
// here tasks is middle ware written by us
app.use('/api/v1/tasks', tasks);


app.get('/', (req, res)=>{
    res.send("Welcome to Task Manager");
})

const connectToDb = async() =>{
    try {
        await connectDb(process.env.CONNECTION_STRING);
        app.listen(port, ()=>{
            console.log(`app is running on port ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
    
}

connectToDb();
