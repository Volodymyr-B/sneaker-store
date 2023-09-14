import { NextResponse } from "next/server";
import { QuantityAction } from "@/actions/quantity";

// not use now(mb need for cart check)-------------//
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const ids = searchParams.getAll("ids");
    const quantities = await QuantityAction.getByIds(ids);
    return NextResponse.json(quantities);
  } catch (err) {
    return NextResponse.json("error", {
      status: 500,
      statusText: (err as Error).message,
    });
  }
}
// ------------------------------------------------//
