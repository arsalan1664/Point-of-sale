import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import type { NextAuthConfig } from "next-auth";
import { authSchema } from "@/lib/zod";
import { getUserByUsername } from "@/lib/dbutils";


export default {
    providers: [
        Credentials({
            async authorize(credentials) {
                const validatedFields = authSchema.safeParse(credentials);

                if (validatedFields.success) {
                    const { username, password } = validatedFields.data;

                    const user = await getUserByUsername(username);
                    if (!user) return null;

                    const passwordsMatch = await bcrypt.compare(
                        password,
                        user.password
                    );

                    if (passwordsMatch) return { id: user.id, email: user.email, name: user.name, image: user.avatar };
                }

                return null;
            },
        }),
    ],
} satisfies NextAuthConfig;






