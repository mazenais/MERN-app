import express from "express";
import newUserModel from "../models/newUserModel.js";
import jwt from "jsonwebtoken";
import passport from "passport";

const router = express.Router();

/* get all users*/
router.get(
  'users/:id',
  // authenticate,
  passport.authenticate('jwt', { session: false }),
   function (req, res) {
    newUserModel.findById(req.params.id)
      .then(userFound => {
          if(!userFound) { return res.status(404).end(); }
          return res.status(200).json(userFound);
      })
      .catch(err => next(err));
});

export default router;
