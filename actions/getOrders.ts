import { Order } from "@/models/Order"

export default async function getOrders(){
    try {

        const orders = await Order.find({
            user: {$exists: true}
        }).sort({ createDate: -1 })

        return orders
    } catch (error: any) {
        throw new Error(error)
    }
}