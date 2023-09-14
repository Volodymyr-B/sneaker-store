import prisma from "@/lib/config/prisma";
import { Prisma } from "@prisma/client";

export const QuantityAction = {
  async updateById(id: string, amount: number) {
    try {
      const updatedQuantity = await prisma.quantity.update({
        where: { id },
        data: { quantity: { decrement: amount } },
      });
      return updatedQuantity;
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        throw new Prisma.PrismaClientKnownRequestError(
          "Unexpected DB error, please try again later",
          {
            clientVersion: e.clientVersion,
            code: e.code,
          }
        );
      }
      if (e instanceof Prisma.PrismaClientValidationError) {
        throw new Prisma.PrismaClientValidationError(
          "Invalid value provided, call developer"
        );
      }
      throw new Error("Something totally unexpected happend");
    }
  },
  // not use now(mb need for cart check) ----//
  getByIds(ids: string[]) {
    return prisma.quantity.findMany({
      where: {
        id: { in: ids },
      },
    });
  },
  //-----------------------------------------//
};
