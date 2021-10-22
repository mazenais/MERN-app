import * as dotenv from 'dotenv'
import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoute.js';
import newUserRoutes from './routes/newUserRoute.js';
import myProfileRoute from './routes/myProfileRoute.js';
import newUserModel from './models/newUserModel.js';
import cors from 'cors'
import { jwtStrategy } from './passport.js';
import passport from "passport"
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
app.use('/api/users', userRoutes);
app.use('/api/auth', newUserRoutes);
app.get('api/userModel/:userModelId', myProfileRoute);

app.get('/api/users/:id', function(req, res) {
  newUserModel.findById(req.params.id)
    .then(userFound => {
      if(!userFound) { return res.status(404).end(); }
      return res.status(200).json(userFound);
    })
    .catch(err => next(err));
});

// passport middleware
passport.use('jwt', jwtStrategy);
app.use(passport.initialize());


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

