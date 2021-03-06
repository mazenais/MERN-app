import express from 'express'
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import newUserModel from '../models/newUserModel.js';
// import passport from 'passport';


const router = express.Router();



router.post('/register', 
  (req, res) => {
      const reqemail = req.body.email;
      const reqpassword = req.body.password;
      const {name } = req.body;
      console.log(`req.body :>>`, req.body)

      newUserModel.findOne({ email: reqemail }, (err, user) => {
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
                            const newUser = new newUserModel({ name, email: reqemail, password: hash});
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
    // if(req.isAuthenticated()){ 
       const reqemail = req.body.email;
       const reqpassword = req.body.password;

    newUserModel.findOne({ email: reqemail }, (err, user) => {
        if (err) {
            res.send(err);
        }
        if (user) {
            console.log(user)
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
                            console.log(token)
                           if (err) { res.send(err) }

                            res.status(200).json({
                                success: true,
                                // isAuthenticated: true,
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
            res.status(403).send({ message: "user doesn't exist", success: false })
        }

    });
// };
});



export default router