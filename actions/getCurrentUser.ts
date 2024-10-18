import { User } from "@/models/User";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";


export async function getSession() {
    return await getServerSession(authOptions);
  }

export async function getCurrentUser() {
    try {
        const session = await getSession();

    if (!session?.user?.email) {
      return null;
    }

        const currentUser = await User.findOne({ email: session?.user?.email,
            orders: { $exists: true }
         }
        )

        if (!currentUser) {
            return null
        }

        return {
            ...currentUser,
            createdAt: currentUser.createdAt.toString(),
            updateAt: currentUser.updatedAt.toString(),
            emailVerified: currentUser.emailVerified?.toISOString() || null,
          };
    } catch (error: any) {
        console.log(error)
    }
}