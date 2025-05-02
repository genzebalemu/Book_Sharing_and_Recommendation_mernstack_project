import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const secretKey = process.env.SECRET_KEY;
const Auth = (req, res, next) => {
  try {
    // Corrected header name and spelling
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      return res.status(403).send({ message: "Access token required" });
    }

    // Verify token
    const verified = jwt.verify(token, secretKey);
    req.user = verified; // Attach the user payload to the request
    next();
  } catch (error) {
    res.status(401).send({ message: "Invalid or expired token", error: error.message });
  }
};


export default Auth;