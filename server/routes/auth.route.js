import express from "express";
import { googleAuth } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/google-auth", googleAuth);  // ✅ MUST BE THIS

export default router;
