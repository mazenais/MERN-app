import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import NewUserModel from "./models/newUserModel.js";
import * as dotenv from 'dotenv';

//loading .env file
dotenv.config();

const jwtOptions = {
    secretOrKey: process.env.JWT_SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

// export const jwtStrategy = new JwtStrategy(jwtOptions, async (payload, done) => {
//     try {
//         // identify user by ID
//         const user = await NewUserModel.findById(payload.id);
//         console.log('user :>>', user);
//         if (!user) {
//             return done(null, flase);
//         }
//         return done(null, user);
//     } catch (e) {
//         return done(e, false);
//     }
// });
const jwtVerify = async (payload, next) => {
    try {
        const user = await NewUserModel.findById(payload.id);
        console.log(user);
        if (!user) {
            return next(null, false);
        }
        return next(null, user);
    } catch (error) {
        next(error, false);
    }
};

export const jwtStrategy = new JwtStrategy(jwtOptions, jwtVerify);