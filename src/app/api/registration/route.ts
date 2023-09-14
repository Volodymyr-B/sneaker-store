import { NextResponse } from "next/server";
import { UserAction } from "@/actions/user";
import type { UserValues } from "@/types/dto-out";

export async function POST(request: Request) {
  try {
    const body: UserValues = await request.json();
    const { name, email, password } = body;
    if (!name || !email || !password) {
      return NextResponse.json("error", {
        status: 400,
        statusText: "Some data is missing",
      });
    }
    const user = await UserAction.createNew(body);
    return NextResponse.json(user);
  } catch (err) {
    return NextResponse.json("error", {
      status: 500,
      statusText: (err as Error).message,
    });
  }
}
