import { Order } from "@/models/Order";

interface IParams {
    orderId?: string;
  }

  
  export default async function getOrderById(params: IParams) {
    try {
        const { orderId } = params;

        const order = await Order.findOne({ _id: orderId });

        if (!order) return null;

        return order
    } catch (error: any) {
        throw new Error(error)
    }
  }