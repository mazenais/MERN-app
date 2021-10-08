import dotenv from 'dotenv'
import express from 'express';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute.js';
import newUserRoute from './routes/newUserRoute.js';
import cors from 'cors'
import { JwtStrategy } from './passport.js';
dotenv.config();



const app = express();
// Use cors
app.use(cors());  

// urlparser is deprecated in express 4
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

//using the routes for a specific api
app.use('/api/users', userRoute);
app.use('/api/auth', newUserRoute);

// passport middleware
app.use(passport.innitialize());
passport.use('jwt', JwtStrategy);

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