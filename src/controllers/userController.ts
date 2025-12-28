import { Request, Response } from "express";
import * as  Userservice from "../services/userService";

export const registerUser = async (req: Request, res: Response) => {
    try {
        const { name, phone } = req.body;
        const newUser = await Userservice.createUser({ name, phone });
        res.status(201).json(newUser);
    }
    catch (err: any) {
        res.status(err.status || 500).json({ message: err.message || "Server error" });
    }
};
export const loginUser = async (req: Request, res: Response) => {
    try {
        const { name, phone } = req.body;
        const user = await Userservice.loginUser({ name, phone });
        res.status(200).json(user);
    }
    catch (err: any) {
        res.status(err.status || 500).json({ message: err.message || "Server error" });
    }
};
export const getUserHistory = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id;
        const history = await Userservice.getUserHistory(userId);
        res.status(200).json(history);

    }
    catch (err: any) {
        console.error("Error fetching history:", err);
        res.status(err.status || 500).json({ message: err.message || "Server error" });
    }
}