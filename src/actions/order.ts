import { Prisma } from "@prisma/client";
import prisma from "@/lib/config/prisma";
import type { OrderValues } from "@/types/dto-out";

export const OrderAction = {
  async createNew(options: OrderValues) {
    try {
      const {
        firstName,
        lastName,
        deliveryAddress,
        buyer,
        phone,
        email,
        totalPrice,
        orderItem,
      } = options;

      const order = await prisma.order.create({
        data: {
          firstName,
          lastName,
          deliveryAddress,
          phone,
          email,
          buyerId: buyer,
          totalPrice,
          orderItems: {
            create: orderItem,
          },
        },
      });
      return order;
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
};
