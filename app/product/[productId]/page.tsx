import Container from "@/components/Container";
import ProductDetails from "./ProductDetails";
import ListRating from "./ListRating";
import getProductById from "@/actions/getProductById";


interface Iprams {
    productId?: string;
}

/* interface HomeProps{
  searchParams: IProductParams
} */

const page = async ({ params }: { params: Iprams }) => {

  const product = await getProductById(params)

  if (!product) {
    return (
      <span className="">
        This product does not exist
      </span>
    )
  }

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
