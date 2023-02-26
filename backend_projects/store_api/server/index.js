const express = require('express');
require('dotenv').config();
require('express-async-errors');
const notFound = require('./middleware/not-found');
const errorHandler = require('./middleware/error-handler');
const connectDb =require('./db/connect');
const Products = require('./routes/products');
const app = express();

app.get('/', (req, res)=>{
    res.send('<h1>Store Api</h1><a href="/api/v1/products>Products page</a>')
})

app.use('/api/v1/products', Products);
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 3000;
const connect = async () =>{
    try {
        await connectDb(process.env.MONGO_URI);
        app.listen(port, ()=>{
            console.log(`Server listening on port ${port}...`)
        })
    } catch (error) {
        console.log("Error in connection to server: ", error)
    }
}

connect();