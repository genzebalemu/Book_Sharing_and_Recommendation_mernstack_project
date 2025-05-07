import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import connectDB from "./db.js"
const app = express();
import userRoutes from "./Routes/User.js";
import bookRoutes from "./Routes/Book.js"
app.use(express.json()); // ✅ This parses incoming JSON bodies
app.use(cors())
dotenv.config();
connectDB();
const port = process.env.PORT;

app.use("/api/Users", userRoutes)
app.use("/api/Books", bookRoutes)
app.listen(port,()=>{
    console.log(`app running on port ${port}`)
})


