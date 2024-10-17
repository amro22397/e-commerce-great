import { Product } from "@/models/Product";
import { create } from "domain";
import mongoose from "mongoose";


interface IParams{
    productId?: string
}

  export default async function getProductById(params: IParams) {
    try {

        mongoose.connect(process.env.DATABASE_URL as string);

        const {productId} = params;
        console.log(productId)

        const product = await Product.findOne({ _id: productId }
        ).sort({ createdAt: -1 });

        if (!product) {
            return null;
        }

        return product;

    } catch (error: any) {
        throw new Error(error)
    }
  }