import { Prisma } from "@prisma/client";

export type ProductShort = Prisma.ProductGetPayload<{}>;
export type ProductFull = Prisma.ProductGetPayload<{
  include: { comments: true; quantities: true };
}>;

export type CategoryFull = Prisma.CategoryGetPayload<{
  include: { types: { include: { variants: true } } };
}>;
export type TypeFull = Prisma.TypeGetPayload<{ include: { variants: true } }>;

export type QuantityShort = Prisma.QuantityGetPayload<{}>;

export type UserFull = Prisma.UserGetPayload<{
  include: { comments: true; orders: true };
}>;
export type OrderFull = Prisma.OrderGetPayload<{
  include: { orderItems: true };
}>;
export type OrderItemFull = Prisma.OrderItemGetPayload<{}>;
export type CommentFull = Prisma.CommentGetPayload<{}>;
