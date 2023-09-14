import { NextResponse } from "next/server";
import { CommentAction } from "@/actions/comment";
import type { CommentValues } from "@/types/dto-out";

export async function POST(request: Request) {
  try {
    const body: CommentValues = await request.json();
    const { userEmail, userName, productId, body: commentText } = body;
    if (!userEmail || !userName || !productId || !commentText) {
      return NextResponse.json("error", {
        status: 400,
        statusText: "Some data is missing",
      });
    }
    const comment = await CommentAction.createNew(body);
    return NextResponse.json(comment);
  } catch (err) {
    return NextResponse.json("error", {
      status: 500,
      statusText: (err as Error).message,
    });
  }
}
