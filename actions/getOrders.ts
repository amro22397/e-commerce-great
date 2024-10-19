import { OrderObj } from "@/models/OrderObj"

export default async function getOrders(){
    try {

        const orders = await OrderObj.find({
            user: {$exists: true}
        }).sort({ createdAt: -1 })

        return orders
    } catch (error: any) {
        throw new Error(error) 
    }
}