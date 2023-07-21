import express from 'express';
import * as DatabaseController from '../controllers/database.controller.js';

let router = express.Router();

router.post("", DatabaseController.createTable);
router.post("/addColumn", DatabaseController.addColumns);
// router.post("/alterColumnType", DatabaseController.alterColumnType);
router.delete("/deleteColumn", DatabaseController.deleteColumn);

export default router;