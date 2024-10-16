import { getCurrentUser } from '@/actions/getCurrentUser'
import Container from '@/components/Container'
import NullData from '@/components/NullData'
import React from 'react'
import getOrders from '@/actions/getOrders'
import getOrdersByUserId from '@/actions/getOrderByUserId'

const page = async () => {
    const currentUser = await getCurrentUser()

    if (!currentUser || currentUser._doc.role !== "ADMIN") {
        return (
            <>
            <pre className="hidden">{JSON.stringify(currentUser, null, 2)}</pre>
            <NullData title="You are not allowed to access this page" />
            </>
        );
      }

      const orders = await getOrdersByUserId(currentUser._doc._id)

  return (
    <div className="pt-8">
    <Container>
    <pre className="hidden">{JSON.stringify(currentUser, null, 2)}</pre>
    </Container>
  </div>
  )
}

export default page