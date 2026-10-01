import express from 'express';
import{getTasks, getTask, deleteTask, createTask, updateTask}from '../controllers/controllers.js';
const router = express.Router();

router.get("/", getTasks);
router.get("/:id", getTask);
router.delete("/:id", deleteTask);
router.post("/", createTask);
router.put("/:id", updateTask);




export default router;