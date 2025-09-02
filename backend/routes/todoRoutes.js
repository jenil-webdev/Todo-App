import express from "express";
import Todo from "../models/todo.js";

const router = express.Router();

// Get all todos
router.get("/", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// Add a todo
router.post("/", async (req, res) => {
  const todo = new Todo({ text: req.body.text });
  await todo.save();
  res.json(todo);
});

// Toggle todo completion
router.patch("/:id", async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo) return res.status(404).json({ message: "Not found" });
  todo.completed = !todo.completed;
  await todo.save();
  res.json(todo);
});

// Delete todo
router.delete("/:id", async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
});

export default router;
