import { NextResponse } from "next/server";
import { ProductAction } from "@/actions/product";

export async function GET(
  request: Request,
  { params }: { params: { productId: string } }
) {
  try {
    if (!params.productId) {
      return NextResponse.json("Product id is required", { status: 400 });
    }
    const product = await ProductAction.getById(params.productId);
    return NextResponse.json(product);
  } catch (err) {
    return NextResponse.json("error", {
      status: 500,
      statusText: (err as Error).message,
    });
  }
}
