import express from "express";
import Auth from '../Middleware/Auth.js';
import { CreateBook, GetOneBook,GetAllBooks,UpdateBook, DeleteBook } from "../Controller/Book.js";
const router = express.Router();

router.post("/CreateBook",Auth, CreateBook );
router.get("/:id", Auth, GetOneBook);
router.get("/books", Auth,GetAllBooks);
router.delete("/deletebook/:BookId", Auth, DeleteBook);
router.put("/updatebook/:BookId", Auth, UpdateBook)


export default router;