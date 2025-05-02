
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../Model/User.js";
dotenv.config();

const secret_key = process.env.SECRET_KEY || "default-secret";

export const Signup = async (req, res) => {
    const { fullname, email, password } = req.body;
    try {
        const ExistingUser = await User.findOne({ email });
        if (ExistingUser) {
            return res.status(400).json("User Already Exists");
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const Newuser = new User({
            fullname,
            email,
            password: hashedPassword
        });

        await Newuser.save();
        res.status(201).json({ User: Newuser, message: "User Registered successfully" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error", error });
    }
};

export const Login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const ExistingUser = await User.findOne({ email });
        if (!ExistingUser) {
            return res.status(400).json({ message: "User is not registered. Please register." });
        }

        const PasswordMatch = await bcrypt.compare(password, ExistingUser.password);
        if (!PasswordMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const Token = jwt.sign(
            { id: ExistingUser._id, email: ExistingUser.email },
            secret_key,
            { expiresIn: "1h" }
        );

       
        res.status(200).json({ message: "Login successful", user: ExistingUser, token: Token });

    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};


export const GetOneuser = async(req,res)=>{
   const { id } = req.params;

  try {
      const user = await User.findById(id);
      if(!user){
          return res.status(404).json({ message:'User not found'})
      }
  
      res.status(200).json(user)
  } catch (error) {
    res.status(500).json(error.message)
  }

}


export const GetAllusers = async(req,res)=>{
    try {
        const AllUsers= await User.find();
        if(!AllUsers){
            return res.status(404).json({message: " not users found"})
        }

        res.status(200).json(AllUsers)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export const UpdateProfile = async(req,res)=>{
    const { Id } = req.params;
    const inputs = req.body;
    try {
        const user =  await User.findOne(Id) 
        if(!user){
            return res.status(404).json({ message:"User not found"})
        }
        const UpdatetedUser = await User.findByIdAndUpdate(Id, inputs, { new: true }  )
        if(!UpdatetedUser){
            return res.status(400).json({message:"Failed to Update the user "})
        }
        res.status(200).json(UpdatetedUser)

    } catch (error) {
        res.status(500).json({message:"Internal Server error", error})
    }
}

export const DeleteProfile = async(req,res)=>{
    const { Id }= req.params;
    try {
        const user = await User.findOne(Id);
        if(!user){
            return res.status(404).json({message:"User not found"})
        }
        const DeletedUser = await User.findByIdAndDelete(Id)
        if(!DeletedUser){
            return res.status(400).json({message:" failed to Delete"})
        }

        res.status(200).json(DeletedUser)
    } catch (error) {
        res.status(500).json( error.message)
    }
}

export const requireResetPassword = async(req,res)=>{

}


export const resetPassword = async(req,res)=>{

}

export const Follow = async(req,res)=>{
    
}

export const UnFollow = async(req,res)=>{

}


