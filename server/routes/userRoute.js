import express from 'express'
import userModel from '../models/userModel.js'


const router = express.Router();

/* get all users*/
router.get('/', 
  (req, res) => {
     userModel.find()
       .then(files => {
         res.send(files)
       })
       .catch(err => console.log(err));
});


export default router