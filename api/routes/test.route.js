import express from "express";
import {
  shouldBeAdmin,
  shouldBeLoggedIn,
} from "../controllers/test.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";
const router = express.Router();

router.get("/user-should-be-login", verifyToken, shouldBeLoggedIn);
router.get("/user-should-be-admin", verifyToken, shouldBeAdmin);
export default router;
