import express from "express";
import { Signup, Login } from "../Controller/User.js";
import Auth from '../Middleware/Auth.js';
const router = express.Router();

router.post("/Signup", Signup)
router.post("/Login", Login);




export default router;