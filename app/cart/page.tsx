import Container from "@/components/Container"
import CartClient from "./CartClient"
import { getCurrentUser } from "@/actions/getCurrentUser"

const page = async () => {

  const currentUser = await getCurrentUser();
  
  return (
    <div className='pt-8'>
    <Container >
      <CartClient currentUser={currentUser?._doc} />
    </Container>
  </div>
  )
}

export default page
