import mongoose, { Schema } from "mongoose";


export const userSchmea = new mongoose.Schema({

    fullname:{
        type:String,
        required:[true,"Name is required"]
    },
    email:{
        type:String,
        unique:true,
        required:[true,"Email is Required"]
    },

    password:{
        type:String,
        required:[true, "Password is Required"],
        minlength: 6
    },
    createdAt: {
        type: Date,
        default: Date.now,
      },
    bio:{
        type:String,
        default:"place here your bio"
    },
    profileImage:{
        type:String,
        default:""
    },
    following: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",  // Referencing the 'User' model
        },
      ],
    followers: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",  // Referencing the 'User' model
        },
      ],
    groups: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Group",  // Assuming you have a Group model defined
        },
      ],
})

const User = mongoose.model("User", userSchmea)
export default User;