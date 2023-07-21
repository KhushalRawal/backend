import express from 'express';
import * as UserController from '../controllers/users.controller.js';

let router = express.Router();

router.get("", UserController.getAllUser);
router.get("/:id", UserController.getUser);
router.put("/:id", UserController.updateUser);
router.post("/create", UserController.insertUser);
router.delete('/:id', UserController.deleteUser);

export default router;