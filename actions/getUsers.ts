import { User } from "@/models/User";


export default async function getUsers() {
    try {
        const users = User.find({})

        return users

    } catch (error: any) {
        throw new Error(error)
    }
}