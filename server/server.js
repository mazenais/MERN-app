import dotenv from 'dotenv'
import express from 'express';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute.js';
import cors from 'cors'
dotenv.config();



const app = express();

// urlparser is deprecated in express 4
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

//using the routes for a specific api
app.use('/api/users', userRoute);

//const db = env.mongoURI;
// connect to mongodb / .env file 
mongoose
  .connect(process.env.DB)
  .then(() => console.log('Connection to Mongo DB established'))
  .catch(err => console.log(err.message));

const port = process.env.PORT || 5000;

app.get('/test', (req, res) => {
  res.send({ msg: 'Test route.' });
});

app.listen(port, () => {
  console.log('Server is running on ' + port + 'port');
});


//const cors = require('cors');