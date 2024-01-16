import * as bookController from '../controllers/bookController.js';
import express from 'express';
const router = express.Router();



router.post('/',bookController.createBook);
router.get('/',bookController.getAllBooks);
router.get('/:id',bookController.getBook);
router.patch('/:id',bookController.updateBook);
router.delete('/:id',bookController.deleteBook);






export default router;