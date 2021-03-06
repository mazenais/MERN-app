import { Int32 } from "bson"
import mongoose from "mongoose"

const UsersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: true
    },
    img: {
        type: String,
    }

})

export default mongoose.model('user', UsersSchema)