import { Order } from "@/models/Order"

export default async function getOrdersByUserId(id: string){
    try {
        const orders = await Order.find(
            { userId: { $in: [id] } },
        ).sort({ createDate: -1 })

        return orders
    } catch (error: any) {
        throw new Error(error)
    }
}