"use server";

import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { authSchema } from "@/lib/zod";

export const registerAction = async (state: any, formData: FormData) => {
    try {
        const validatedFields = authSchema.safeParse({
            username: formData.get("username"),
            password: formData.get("password"),
        });

        if (!validatedFields.success) {
            return { error: "Invalid fields!" };
        }

        const { username, password } = validatedFields.data;
        const hashedPassword = await bcrypt.hash(password, 10);

       const user = await db.user.create({
            data: {
                username,
                password: hashedPassword,

            },
        });
        console.log(user)
        return { success: "Resgister" };
    } catch (error) {
        console.log(error);
        return { error: "Resgister Error" };
    }
};