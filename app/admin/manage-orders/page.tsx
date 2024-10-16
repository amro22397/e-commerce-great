import { getCurrentUser } from '@/actions/getCurrentUser'
import Container from '@/components/Container'
import NullData from '@/components/NullData'
import React from 'react'
import ManageOrdersClient from './ManageOrdersClient'
import getOrders from '@/actions/getOrders'

const page = async () => {
    const orders = await getOrders()
    const currentUser = await getCurrentUser()

    if (!currentUser || currentUser._doc.role !== "ADMIN") {
        return (
            <>
            <pre className="hidden">{JSON.stringify(currentUser, null, 2)}</pre>
            <NullData title="You are not allowed to access this page" />
            </>
        );
      }

  return (
    <div className="pt-8">
    <Container>
    <pre className="hidden">{JSON.stringify([], null, 2)}</pre>
      <ManageOrdersClient orders={orders}/>
    </Container>
  </div>
  )
}

export default page
