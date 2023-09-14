import { ProductFull, QuantityShort } from "@/types/dto-in";

export interface CartProduct
  extends Omit<ProductFull, "quantities" | "comments"> {
  amount: QuantityShort;
  pickedAmount: number;
}
