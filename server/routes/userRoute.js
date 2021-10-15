import express from 'express'
import userModel from '../models/userModel.js';
import passport from 'passport'


const router = express.Router();

/* get all users*/
router.get('/', 
    // authenticate,
    passport.authenticate("jwt", { session: false }),
  (req, res) => {
     userModel.find()
       .then(files => {
         res.send(files)
       })
       .catch(err => console.log(err));
});


export default router