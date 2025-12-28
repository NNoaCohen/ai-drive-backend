import express from "express";
import { getUserHistory, loginUser, registerUser } from "../controllers/userController";
import { validateUserInput } from "../middlewares/validateUserInput";
import { validateObjectId } from "../middlewares/validateObjectId";

const router = express.Router();

router.post("/registerUser", validateUserInput,registerUser);
router.post("/loginUser",validateUserInput,loginUser);
router.get("/:id/history",validateObjectId("id"),getUserHistory)
export default router;
