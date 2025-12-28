import { Request, Response } from "express";
import * as promptService from "../services/promptService";

export const addPrompt = async (req: Request, res: Response) => {
    try {
        const { userId, categoryId, subcategoryId, promptText, response } = req.body;
        const prompt = await promptService.addPrompt({userId, categoryId, subcategoryId, promptText, response});
        res.status(200).json(prompt);
    }
    catch (err: any) {
        res.status(err.status || 500).json({ message: err.message || "Server error" });
    }
};

