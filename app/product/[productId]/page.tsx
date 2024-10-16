import Container from "@/components/Container";
import ProductDetails from "./ProductDetails";
import ListRating from "./ListRating";
import getProducts, { IProductParams } from "@/actions/getProducts";


interface Iprams {
    productId?: string;
}

interface HomeProps{
  searchParams: IProductParams
}
const page = async ({ params, searchParams }: { params: Iprams, searchParams: IProductParams }) => {

  const products: any = await getProducts(searchParams)

const product = products.find((item: any) => item._id === params.productId)

console.log(product)

  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} />
        <div className="flex flex-col mt-20 gap-4">

        <ListRating product={product} />
        </div>
      </Container>
    </div>
  )
}

export default page
