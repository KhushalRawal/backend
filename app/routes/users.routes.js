import  express from "express";
import * as UserController from '../controllers/users.controller.js'

let router = express.Router();

router.get("",UserController.getAllUser);
router.get("/:id",UserController.getUser);
router.post("/create",UserController.insertUser);
router.post("/login",UserController.logIn);
router.put("/:id",UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

export default router;