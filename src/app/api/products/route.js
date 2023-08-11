

import { NextResponse } from 'next/server';
import dbConnect from '@/utils/dbConnect';
import product from '@/backend/models/product';

export const GET = async () => {
  await dbConnect();
  const products = await product.find();
  return NextResponse.json({ products });
};


export const POST = async (request) => {
  const data = await request.json();
  await dbConnect();
  console.log(data);
  await product.create(data);
  return NextResponse.json({ message: 'Product Created' }, { status: 201 });
};
