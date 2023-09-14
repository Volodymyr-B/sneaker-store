import { NextResponse } from "next/server";
import { OrderAction } from "@/actions/order";
import { QuantityAction } from "@/actions/quantity";
import type { OrderValues } from "@/types/dto-out";

export async function POST(request: Request) {
  try {
    const body: OrderValues = await request.json();
    const { orderItem } = body;
    if (!orderItem.length) {
      return NextResponse.json("No product selected", {
        status: 400,
        statusText: "No product selected",
      });
    }
    const order = await OrderAction.createNew(body);
    // temp sulution for quantity control while dont have CMS---//
    Promise.allSettled(
      orderItem.map(
        async (item) =>
          await QuantityAction.updateById(item.quantityId, item.amount)
      )
    ).then((results) => {
      const rejected = results.find((req) => req.status === "rejected");
      if (rejected) {
        console.log(results.map((el) => el.status));
      }
    });
    //-----------------------------------------------------------//
    return NextResponse.json(order);
  } catch (err) {
    return NextResponse.json("error", {
      status: 500,
      statusText: (err as Error).message,
    });
  }
}
