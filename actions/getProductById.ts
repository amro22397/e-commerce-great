import { Product } from "@/models/Product";


interface IParams{
    productId?: string
}

  export default async function getProductById(params: IParams) {
    try {
        const {productId} = params;
        console.log(productId)

        const product = await Product.findOne({ _id: productId }
        ).sort({ createDate: -1 });

        console.log(product)

        if (!product) {
            return null;
        }

        return product;
    } catch (error: any) {
        throw new Error(error)
    }
  }