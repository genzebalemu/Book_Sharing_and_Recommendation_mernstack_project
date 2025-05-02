import mongoose from "mongoose"


const bookSchema = new mongoose.Schema({
    title:{
        type:String
    },
    description:{
        type:String
    },
    author:{
       type:String 
    },
    genre:{
        type:String
    },
    publish_date:{
        type:Date
    },
    coverPage:{
        type:String
    },
    creator:{type:String},

    comments:[{
        
       commentator:{type:mongoose.Schema.Types.ObjectId, ref:'User'},
       comment:String
    }],
    likes:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
    }],
   rate:{
       number_of_star:{
        type:Number,
        default:0
       },
       
       rater:[
        {
            userId:{type: mongoose.Schema.Types.ObjectId , ref:'User'},
            star:{type:Number}
        }
       ]
   }


},{timestamps:true})
const Book = mongoose.model("Book", bookSchema)
export default Book;