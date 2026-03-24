import express from "express";
iimport { googleAuth } from "../controllers/user.controller.js"; ✅

const router = express.Router();

router.post("/google-auth", googleAuth);  // ✅ MUST BE THIS

export default router;
