const connectDb = require('./db/connect');
const Product = require('./models/products')
require('dotenv').config();

const products = require('./products.json')

const connect = async () =>{
    try {
        await connectDb(process.env.MONGO_URI);
        await Product.deleteMany();
        await Product.create(products)
        console.log("success");
        process.exit(0);

    } catch (error) {
        console.log("error: ", error)
        process.exit(1);
    }
}

connect();