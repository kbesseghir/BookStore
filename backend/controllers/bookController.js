import {Book} from '../models/bookModel.js';

export const createBook = async(req,res)=>{
    

    try{
    const newBook =  await Book.create(req.body)
    res.json(newBook);
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
}

export const getAllBooks = async(req, res) => {
    
    try{
        const books = await Book.find()
    res.json(books);
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
}


export const getBook = async(req, res) => {
    
    try{
        const bookId = req.params.id
        const book = await Book.findById(bookId)
        if(!book){
            res.status(404).json('book not found')
        }
        else{        res.json(book);
}       
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
}

export const updateBook = async(req, res) => {
    
    try{
        const bookId = req.params.id
        const book = await Book.findByIdAndUpdate(bookId,req.body)
        res.json(book);
        if(!book){
            res.status(404).json('book not found')
        }
        else{
            res.status(200).json('book updated successfully')
        }
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
}

export const deleteBook = async (req, res) => {

    try{
        const bookId = req.params.id
        const book = await Book.findByIdAndDelete(bookId)
        if(!book){
            res.status(404).json('book not found')
        }
        else{
            res.status(200).json('book deleted successfully')
        }

    }
    catch(error){
        res.status(500).json({error:error.message})

    }
}



