import express from "express";

import {
  registerUser,
  loginUser,
  getCurrentUser,
  logoutUser,
} from "../controllers/authController.js";

import {
  registerValidation,
  loginValidation,
} from "../validators/authValidator.js";
import protect from "../middleware/authMiddleware.js";
import validate from "../middleware/validationMiddleware.js";

const router = express.Router();


/**
 * @swagger
 * /api/v1/auth/register:
 *   post:
 *     summary: Register a new user
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User registered successfully
 */
router.post("/register", registerValidation, validate, registerUser);



/**
 * @swagger
 * /api/v1/auth/login:
 *   post:
 *     summary: Login user
 *     tags:
 *       - Authentication
 *     responses:
 *       200:
 *         description: Login successful
 */
router.post("/login", loginValidation, validate, loginUser);


/**
 * @swagger
 * /api/v1/auth/me:
 *   get:
 *     summary: Get current logged in user
 *     tags:
 *       - Authentication
 *     responses:
 *       200:
 *         description: Current user details
 *       401:
 *         description: Unauthorized
 */
router.get("/me", protect, getCurrentUser);


/**
 * @swagger
 * /api/v1/auth/logout:
 *   post:
 *     summary: Logout current user
 *     tags:
 *       - Authentication
 *     responses:
 *       200:
 *         description: Logged out successfully
 *       401:
 *         description: Unauthorized
 */
router.post("/logout", protect, logoutUser);
export default router;
