import { Product } from "@/models/Product";

export interface IProductParams {
    category?: string | null;
    searchTerm?: string | null;
  }

  export default async function getProducts(params: IProductParams) {
    
    try {
        const {category, searchTerm} = params;
        let searchString = searchTerm;

        if (!searchTerm) {
            searchString = "";
        }


        let query: any = {}

        if (category) {
            query.category = category;
        }

        const products = await Product.find({
            ...query,
            $or: [
                {name: {$regex: searchString, $options: "i"}},
                {description: {$regex: searchString, $options: "i"}}
            ]
        }).sort({createdAt: -1})

        return products;
    } catch (error) {
        
    }
  }