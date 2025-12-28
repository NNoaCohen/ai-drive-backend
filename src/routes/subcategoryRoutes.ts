import express from "express";
import { addSubcategory,getSubcategories } from "../controllers/subcategoryController";

const router = express.Router();

router.get("/", getSubcategories);
router.put("/add", addSubcategory);
export default router;
