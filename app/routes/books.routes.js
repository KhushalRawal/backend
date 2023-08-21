import express from "express";
import * as BookController from '../controllers/books.controller.js';

let router = express.Router();

router.get("",BookController.getAllBooks);
router.get("/:id",BookController.getBook);
router.post("/create",BookController.insertBook);

export default router;