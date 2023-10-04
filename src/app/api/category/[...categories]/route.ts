import { NextResponse } from "next/server";
import { CategoryAction } from "@/actions/category";
import { ProductAction } from "@/actions/product";
import { isValidPath } from "@/lib/utils/check-valid-path";
import { toValidNumber } from "@/lib/utils/to-valid-number";

export async function GET(
  request: Request,
  { params }: { params: { categories: string[] } }
) {
  try {
    if (params.categories.length > 3)
      return NextResponse.json("error", {
        status: 404,
        statusText: "Page not found",
      });
    const categories = await CategoryAction.getAll();

    const isValid = isValidPath(params.categories.join("/"), categories);
    if (!isValid)
      return NextResponse.json("error", {
        status: 404,
        statusText: "Page not found",
      });

    const { searchParams } = new URL(request.url);
    const page = searchParams.get("page");
    const validPageNumber = toValidNumber(page);

    const data = await ProductAction.getByParams(
      validPageNumber,
      ...params.categories
    );

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json("error", {
      status: 500,
      statusText: (err as Error).message,
    });
  }
}
