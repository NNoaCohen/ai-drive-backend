import PromptModel from "../models/Prompt";
import UserModel from "../models/User";


interface IPromptInput {
    userId: string;
    categoryId: string;
    subcategoryId: string;
    promptText: string;
    response?: string;
};
export const addPrompt = async ({ userId, categoryId, subcategoryId, promptText, response }: IPromptInput) => {
    const prompt = await PromptModel.create({
        userId,
        categoryId,
        subcategoryId,
        promptText,
        response: response || ""
    });
      await UserModel.findByIdAndUpdate(userId, { 
        $push: { promptHistory: prompt._id } 
    });
    return prompt;

}