import { Prisma } from "@prisma/client";
import prisma from "@/lib/config/prisma";
import { hashPassword } from "@/lib/utils/hashPassword";
import type { UserValues } from "@/types/dto-out";

export const UserAction = {
  async createNew(options: UserValues) {
    const hashPass = await hashPassword(options.password);
    try {
      const { password, ...user } = await prisma.user.create({
        data: {
          name: options.name,
          eMail: options.email,
          password: hashPass,
        },
      });
      return user;
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === "P2002") {
          throw new Prisma.PrismaClientKnownRequestError(
            "Error, new user cannot be created with this email or name",
            {
              clientVersion: e.clientVersion,
              code: e.code,
            }
          );
        } else {
          throw new Prisma.PrismaClientKnownRequestError(
            "Unexpected DB error, please try again later",
            {
              clientVersion: e.clientVersion,
              code: e.code,
            }
          );
        }
      }
      throw new Error("Something totally unexpected happend");
    }
  },

  getByEmail(eMail: string) {
    return prisma.user.findUnique({
      where: { eMail },
      include: {
        orders: {
          include: { orderItems: true },
          orderBy: { createdAt: "desc" },
        },
        comments: true,
      },
    });
  },
};
