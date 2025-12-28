import UserModel from "../models/User";
import PromptModel from "../models/Prompt"

interface IUserInput {
    name: string;
    phone: string;
}

export const createUser = async ({ name, phone }: IUserInput) => {
    const existingUser = await UserModel.findOne({ name, phone });
    if (existingUser) {
        throw { status: 409, message: "User already exists" };
    }
    const user = await UserModel.create({ name, phone });
    return user;
};

export const loginUser = async ({ name, phone }: IUserInput) => {
    const user = await UserModel.findOne({ name, phone });
    if (!user) throw { status: 404, message: "User not found" };
    return user;
};

// service
export const getUserHistory = async (userId: string) => {
    console.log("Fetching user history for:", userId);

    const user = await UserModel.findById(userId).select("promptHistory");

    if (!user) throw { status: 404, message: "User not found" };

    if (!user.promptHistory || user.promptHistory.length === 0) {
        console.log("No prompts found for this user");
        return [];
    }

    // רק אם יש רשומות, עושים populate
    const populatedUser = await UserModel.populate(user, {
        path: "promptHistory",
        model: PromptModel,
        options: { maxTimeMS: 5000 } // timeout אחרי 5 שניות
    });

    console.log("User history fetched:", populatedUser.promptHistory.length);
    return populatedUser.promptHistory;
}

