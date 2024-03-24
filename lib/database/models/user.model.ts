import { Schema, model, models, Document } from "mongoose";

export interface IUserModel extends Document {
  _id: string;
  email: string;
  username?: string;
}

const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const UserModel = models.User || model("User", UserSchema);

export default UserModel;
