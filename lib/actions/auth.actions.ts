"use server";

import { connectToDatabase } from "../database";
import User from "../database/models/user.model";
import { handleError } from "../utils";

export type RegisterUserParams = {
  username: string;
  email: string;
  password: string;
};

export async function RegisterUser({
  email,
  password,
  username,
}: RegisterUserParams) {
  try {
    await connectToDatabase();

    const newUser = await User.create({
      email,
      username,
      password,
    });

    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError("Error Registering User: ", error);
  }
}
