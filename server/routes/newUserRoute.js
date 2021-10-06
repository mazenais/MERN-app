import express from 'express'
import newUserModel from '../models/newUserModel.js'


const router = express.Router();


router.post('/register', 
  (req, res) => {
      const reqemail = req.body.email;
      const reqpassword = req.body.password;
      console.log(`req.body :>>`, req.body)

//       newUswrSchema.findOne({ email: reqemail }, (err, user) => {
//           if (err) {
//               res.send(err);
//           }
//           if (user) {
//               res.send({ msg: "email already used" });
//             } else {
//                 bycrypt.genSalt(10, function (err, salt) {
//                     bycrypt.hash(reqpassword, salt, function (err, hash) {
//                         if (err) {
//                             res.send(err);
//                         } else {
//                             const newUser = new newUserSchema({ email: reqemail, password: hash});
//                         }
//                     })
//                 })
//             }
//       })



//      userModel.find()
//        .then(files => {
//          res.send(files)
//        })
//        .catch(err => console.log(err));
});


export default router