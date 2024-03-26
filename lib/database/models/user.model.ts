import { Schema, model, models, Document } from "mongoose";

const UserSchema = new Schema(
  {
    username: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const User = models?.User || model("User", UserSchema);

export default User;
