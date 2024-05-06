"use server"
import { ZodError } from "zod";
import { z } from 'zod';
import { AuthError } from "next-auth";
import { signIn } from "../../api/auth/[...nextauth]/auth";

const loginSchema = z.object({
    username: z.string().nonempty('Username is required').min(5),
    password: z.string().nonempty('Password is required').min(5),
});


export async function LoginAction(state: any, formData: FormData) {
    const username = formData.get("username") as string
    const password = formData.get("password") as string
    try {

        const validatedField = loginSchema.parse({
            username, password
        })

        const res = await signIn('credentials', {
            username: validatedField.username,
            password: validatedField.password,
            redirect: false
        },)
        console.log(res)
        return { success: "Login Successful" }


    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return { autherror: "Invalid credentials!" };
                default:
                    return { autherror: "Something went wrong!" };
            }
        }

        const zodError = error as ZodError
        const errorMap = zodError.flatten().fieldErrors;
        return {
            message: "error",
            error: {
                username: errorMap["username"]?.[0] ?? "",
                password: errorMap["password"]?.[0] ?? "",

            },
            fieldValue: {
                username: "",
                password: ""
            }
        }
    }


}