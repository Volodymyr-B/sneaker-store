import prisma from "@/lib/config/prisma";

export const CategoryAction = {
  getAll() {
    return prisma.category.findMany({
      include: {
        types: {
          include: { variants: { orderBy: { id: "asc" } } },
          orderBy: { id: "asc" },
        },
      },
      orderBy: { id: "asc" },
    });
  },
};
