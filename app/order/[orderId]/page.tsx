import Container from "@/components/Container";
import ProductDetails from "./ProductDetails";
import ListRating from "./ListRating";
import { products } from "@/utils/products";


interface Iprams {
    productId?: string;
}
const page = ({ params }: { params: Iprams }) => {

const product = products.find(product => product.id === params.productId)

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
