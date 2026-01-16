import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type: String , requird:true}, 
    email:{type: String , requird:true , unique:true}, 
    password:{type: String , requird:true}, 
    role:{type: String ,enum:["owner" , "user"], default:'user'}, 
    image:{type: String , default:''},  
},{timestamps:true})

const User = mongoose.model('User',userSchema)

export default User