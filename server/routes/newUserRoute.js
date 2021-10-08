import express from 'express'
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import newUserModel from '../models/newUserModel.js'


const router = express.Router();


router.post('/register', 
  (req, res) => {
      const reqemail = req.body.email;
      const reqpassword = req.body.password;
      const {name } = req.body;
      console.log(`req.body :>>`, req.body)

      newUswrSchema.findOne({ email: reqemail }, (err, user) => {
          if (err) {
              res.send(err);
          }
          if (user) {
              res.send({ msg: "email already used" });
            } else {
                bcrypt.genSalt(10, function (err, salt) {
                    bcrypt.hash(reqpassword, salt, function (err, hash) {
                        if (err) {
                            res.send(err);
                        } else {
                            console.log('hash :>>', hash);
                            const newUser = new newUserSchema({ name, email: reqemail, password: hash});
                            newUser
                            .save()
                            .then((user) => {
                                res.send(user);
                            })
                            .catch((err) => {
                                res.send(err);
                            });

                        }
                    });
                });
            }
      });
});


 

router.post("/login", (req, res) => {
    const reqemail = req.body.email;
    const reqpassword = req.body.password;

    newUserSchema.findOne({ email: reqemail }, (err, user) => {
        if (err) {
            res.send(err);
        }
        if (user) {
            //load hash from password DB
            bcrypt.compare(reqpassword, user.password, function(err, result) {
                if (result) {
                    // create JWT payload
                    const payload = {
                        id: user.id,
                        email: user.email
                    };
                    // sign token
                    jwt.sign(
                        payload,
                        process.env.JWT_SECRET,
                        {
                            expiresIn: process.env.JWT_EXPIRES_IN,
                        },
                        (err, token) => {
                            if (err) { res.send(err) }

                            res.status(200).json({
                                success: true,
                                token,
                                user
                            });
                        }
                    );
                }
                else {
                    res.status(403).send({ message: 'wrong password', success: false })
                }

            });
        }
        else {
            res.status.apply(403).send({ message: "user doesn't exist", success: false })
        }

    });
});


export default router