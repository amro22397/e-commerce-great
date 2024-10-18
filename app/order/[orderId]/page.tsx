import Container from "@/components/Container";
import OrderDetails from "./OrderDetails";
import getOrderById from "@/actions/getOrderById";


interface Iprams {
    orderId?: string;
}

const page = async ({ params }: { params: Iprams }) => {

    const order = await getOrderById(params)

  return (
    <div className="p-8">
      <Container>
        <OrderDetails order={order} />
        
      </Container>
    </div>
  )
}

export default page
