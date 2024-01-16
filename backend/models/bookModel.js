import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
{
    title:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true,
    }
}

)

export const Book = mongoose.model('Book',bookSchema)
