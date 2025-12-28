import express from "express";
import { addPrompt } from "../controllers/promptController";
import { validateObjectId } from "../middlewares/validateObjectId";
import { validateExists } from "../middlewares/validateExists";
import UserModel from "../models/User";
import CategoryModel from "../models/Category";
import SubcategoryModel from "../models/Subcategory";


const router = express.Router();

router.post("/add", validateObjectId("userId"),
    validateObjectId("categoryId"),
    validateObjectId("subcategoryId"),
    validateExists("userId", UserModel, "User"),
    validateExists("categoryId", CategoryModel, "Category"),
    validateExists("subcategoryId", SubcategoryModel, "Subcategory"), 
    addPrompt);
export default router;
