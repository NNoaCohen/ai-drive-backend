
import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  phone: string;
  promptHistory: mongoose.Types.ObjectId[];
}

const UserSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    promptHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: "Prompt" }],
  },
  { timestamps: true } // createdAt, updatedAt
);

export default mongoose.model<IUser>("User", UserSchema);
