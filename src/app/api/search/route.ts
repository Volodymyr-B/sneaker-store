import { NextResponse } from "next/server";
import { ProductAction } from "@/actions/product";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get("q");
    const products = await ProductAction.getBySearch(search || "");
    return NextResponse.json(products);
  } catch (err) {
    return NextResponse.json("error", {
      status: 500,
      statusText: (err as Error).message,
    });
  }
}
