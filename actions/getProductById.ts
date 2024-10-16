import { Product } from "@/models/Product";


interface IParams{
    productId?: string
}

  export default async function getProductById(params: IParams) {
    try {
        const {productId} = params;

        const product = await Product.findOne({ _id: productId }, 
            { $in: ['reviews'] }
        ).sort({ createDate: -1 });

        if (!product) {
            return null;
        }
    } catch (error: any) {
        throw new Error(error)
    }
  }