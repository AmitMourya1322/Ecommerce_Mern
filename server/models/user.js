import mongoose from "mongoose";
const {Schema} = mongoose;
const userSchema = new Schema({
    name:{
        type:String,
        required:true,
        
    },
    email:{
        type:String,
        trim:true,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        min:2,
        
    },
    about:{
        type:String,
        trim:true,
    },
    role:{
        type:Number,
        default:0,
    },
    address:{
        type:String,
        trim:true,
    }
},{
    timestamps:true
})

export default mongoose.model("User",userSchema);