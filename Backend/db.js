import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// MongoDB URI (update with your actual database URL)
const mongoURI = process.env.MONGO_URI; // Replace with your MongoDB URI

const connectDB = async () => {
  try {
    // Connecting to MongoDB using Mongoose
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connected successfully.");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
