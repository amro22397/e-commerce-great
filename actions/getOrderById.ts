import { Order } from "@/models/Order";
import { OrderObj } from "@/models/OrderObj";
import { getCurrentUser } from "./getCurrentUser";
import { NextResponse } from "next/server";

interface IParams {
    orderId?: string;
  }

  
  export default async function getOrderById(params: IParams) {
    try {

        const currentUser = await getCurrentUser();
    
        if (!currentUser) return NextResponse.error();

        const { orderId } = params;

        const order = await OrderObj.findOne({ _id: orderId });

        if (!order) return null;

        return order
    } catch (error: any) {
        throw new Error(error)
    }
  }