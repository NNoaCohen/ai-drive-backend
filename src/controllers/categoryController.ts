import { Request, Response } from "express";
import * as categoryService from "../services/categoryService"

export const getCategories = async (req: Request, res: Response) => {
    try {
        const categories = await categoryService.getCategories();

        res.status(200).json(categories);
    }
    catch (err: any) {
        res.status(err.status || 500).json({ message: err.message || "Server error" });
    }
};
export const addCategory = async (req: Request, res: Response) => {
    try {
        const name = req.body;
        const category = await categoryService.addCategory(name);
        res.status(200).json(category);
    }
    catch (err: any) {
        res.status(err.status || 500).json({ message: err.message || "Server error" });
    }
};
export const getSubcategoriesByCategory = async (req: Request, res: Response) => {
    try {
        const categoryId = req.params.id;
        const subcategories = await categoryService.getSubcategories(categoryId);
        res.status(200).json(subcategories);
    } catch (err: any) {
        res.status(err.status || 500).json({ message: err.message || "Server error" });
    }
};