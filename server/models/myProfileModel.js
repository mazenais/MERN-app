import mongoose from "mongoose"

const MyProfileSchema = new mongoose.Schema({
    name: {type: String},
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },

})

export default mongoose.model('MyProfile', MyProfileSchema)