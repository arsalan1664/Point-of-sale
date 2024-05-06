import {db } from "./db"
export const getUserByUsername = async (username: string) => {
    try {
        const res = await db.user.findUnique({
            where: {
                username
            }
        })

        return res
    } catch (error) {
        console.log(error)
    }
}
