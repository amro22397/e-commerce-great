import { OrderObj } from "@/models/OrderObj"

export default async function getOrdersByUserId(id: string){
    try {
        const orders = await OrderObj.find(
            { userId: { $in: [id] } },
        ).sort({ createdAt: -1 })

        return orders
    } catch (error: any) {
        throw new Error(error)
    }
}