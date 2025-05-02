import Book from "../Model/Book.js";

export const CreateBook = async(req,res)=>{
    const { title,description,author,genre,publish_date,coverPage} = req.body;

    try {
        const NewBook = new Book({
            title,
            description,
            author,
            genre,
            publish_date,
            coverPage
        });
        if(!NewBook){
            return res.status(400).json({message:"Fialed to create new book"})
        }
        await NewBook.save()
        res.status(200).json({message:"new book is create successfully", NewBook})
    } catch (error) {
        res.status(500).json({message:"Internal server error", error})
    }
}


export const UpdateBook = async(req,res)=>{
    const { BookId } = req.params;
    const inputs = req.body;
   
    try {
        const book = await Book.findOne(BookId)
        if(!book){
            return res.status(404).json({message:"Book not found "})
        } 
        const UpdatedBook = await Book.findByIdAndUpdate(BookdId, inputs, {new:true})
        if(!UpdatedBook){
            return res.status(400).json({message:"failed to Update book"})
        }

        await UpdatedBook.save()
        res.status(200).json({ message:"Book updated successfully", UpdatedBook})
    } catch (error) {
        res.status(500).json({message:"internal server error", error})
    }
}

export const DeleteBook = async(req,res)=>{
    const { BookId } = req.body;
    try {
        const book = await Book.findOne(BookId);
        if(!breakook){
            return res.status(400).json({message:"Book with this id is not found"})
        }
    
        const DeletedBook = await Book.findByIdAndDelete(BookId)
    
        if(!DeletedBook){
            return res.status(400).json({message:"Filed to Delete the book"})
        }
    
        res.status(200).json({message:"Book is Deleted Successfully", DeletedBook})
    } catch (error) {
        res.status(500).json({message:"nternal Sever Error", error})
    }
}


export const GetOneBook = async(req,res)=>{
    const { BookId } = req.params;
    try {
        const book = await Book.findById(BookId);
        if(!book){
            return res.status(404).json({message:"Book is not found with this id", book})
        }
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({message:"Internal Server Error", error})
    }
}



export const GetAllBooks = async(req,res)=>{
    try {
        const Allbooks = await Book.find();
        if(!Allbooks){
            return res.status(400).json({message:"No book found"})
        }

        res.status(200).json(Allbooks)
    } catch (error) {
        res.status(500).json({message:"Internal Server Error", error})
    }
}


export const search = async(req,res)=>{

}

export const RateBook= async(req,res)=>{

}

export const CommentBook = async(req,res)=>{

}