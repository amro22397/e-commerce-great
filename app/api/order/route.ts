
import { getCurrentUser } from '@/actions/getCurrentUser';
import { Product } from '@/models/Product';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';


export async function PUT(request: Request) {
    const currentUser = await getCurrentUser();

    mongoose.connect(process.env.DATABASE_URL as string);

    if (!currentUser || currentUser._doc.role !== 'ADMIN') {
        return NextResponse.error();
    }

    const body = await request.json();
    const { id, deliveryStatus } = body;

    const order = await Product.findByIdAndUpdate({_id: id}, { deliveryStatus } )

    return NextResponse.json(order);

}