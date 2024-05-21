import { revalidatePath } from "next/cache";
import { Prisma } from "@prisma/client";
import prisma from "@/lib/config/prisma";
import type { CommentValues } from "@/types/dto-out";

export const CommentAction = {
  async createNew(options: CommentValues) {
    try {
      const comment = await prisma.comment.create({
        data: options,
      });
      revalidatePath(`/shop/${options.productId}`); // ???? -_-
      return comment;
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
      throw new Error("Something totally unexpected happend");
    }
  },
};
