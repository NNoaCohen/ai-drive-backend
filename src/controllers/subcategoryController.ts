import { Request, Response } from "express";
import * as subcategoriesService from "../services/subcategoryService"

export const getSubcategories = async (req: Request, res: Response) => {
    try {
        const subcategories = await subcategoriesService.getSubcategories();
        res.status(200).json(subcategories);
    }
    catch (err: any) {
        res.status(err.status || 500).json({ message: err.message || "Server error" });
    }
};
export const addSubcategory = async (req: Request, res: Response) => {
    try {
        const {name,categoryId} = req.body;
        const category = await subcategoriesService.addSubcategory({name,categoryId});
        res.status(200).json(category);
    }
    catch (err: any) {
        res.status(err.status || 500).json({ message: err.message || "Server error" });
    }
};