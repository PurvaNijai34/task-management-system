import express from "express";

import protect from "../middleware/authMiddleware.js";

import validate from "../middleware/validationMiddleware.js";

import {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} from "../controllers/taskController.js";

import {
  createTaskValidation,
  updateTaskValidation,
} from "../validators/taskValidator.js";

const router = express.Router();


/**
 * @swagger
 * /api/v1/tasks:
 *   post:
 *     summary: Create a task
 *     tags:
 *       - Tasks
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *             properties:
 *               title:
 *                 type: string
 *                 example: Learn NodeJS
 *               description:
 *                 type: string
 *                 example: Complete Express Authentication Module
 *     responses:
 *       201:
 *         description: Task created successfully
 */
router.post("/", protect, createTaskValidation, validate, createTask);

/**
 * @swagger
 * /api/v1/tasks:
 *   get:
 *     summary: Get all tasks
 *     tags:
 *       - Tasks
 *     responses:
 *       200:
 *         description: List of tasks
 */
router.get("/", protect, getTasks);

/**
 * @swagger
 * /api/v1/tasks/{id}:
 *   get:
 *     summary: Get task by ID
 *     tags:
 *       - Tasks
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Task details
 */
router.get("/:id", protect, getTaskById);

/**
 * @swagger
 * /api/v1/tasks/{id}:
 *   put:
 *     summary: Update task
 *     tags:
 *       - Tasks
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum:
 *                   - Pending
 *                   - In Progress
 *                   - Completed
 *     responses:
 *       200:
 *         description: Task updated successfully
 */
router.put("/:id", protect, updateTaskValidation, validate, updateTask);

/**
 * @swagger
 * /api/v1/tasks/{id}:
 *   delete:
 *     summary: Delete task
 *     tags:
 *       - Tasks
 *     responses:
 *       200:
 *         description: Task deleted successfully
 */
router.delete("/:id", protect, deleteTask);

export default router;
