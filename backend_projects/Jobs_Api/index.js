require('dotenv').config();
require('express-async-errors');
const express = require('express')
const app = express();

const helmet = require('helmet')
const cors = require('cors')
const xss = require('xss-clean')
const rateLimiter = require('express-rate-limiter')

const connectDb = require('./db/connect');

const authRouter= require('./routes/auth');
const jobsRouter = require('./routes/jobs');
const authenticateUser = require('./middleware/authentication')

const notFoundMiddleware = require('./middleware/notFound');
const errorHandlerMiddleware = require('./middleware/errorHandler');


app.get('/', (req, res) =>{
    res.send('jobs api')
});

app.use('/api/v1/auth',authRouter);
app.use('/api/v1/jobs', authenticateUser, jobsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

app.set('trustProxy', 1)
app.use(rateLimiter)
app.use(express.json());
app.use(helmet())
app.use(cors())
app.use(xss())


const port = process.env.PORT || 3000;

const connect = async () =>{
    try{
        await connectDb(process.env.MONGO_URI);
        app.listen(port, ()=>
        console.log(`Server is listening on port ${port}`));
    }
    catch (error){
        console.log(error)
    }
}
connect();