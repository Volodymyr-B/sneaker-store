import prisma from "@/lib/config/prisma";

export const ProductAction = {
  // not used atm -------------//
  getAll() {
    return prisma.product.findMany();
  },
  //---------------------------//
  getTwenty() {
    return prisma.product.findMany({
      take: 20,
      where: { quantities: { some: { quantity: { gt: 0 } } } },
      orderBy: { createdAt: "desc" },
    });
  },

  getById(id: string) {
    return prisma.product.findUnique({
      where: {
        id,
      },
      include: {
        quantities: {
          where: { quantity: { gt: 0 } },
          orderBy: { id: "asc" },
        },
        comments: { orderBy: { createdAt: "desc" } },
      },
    });
  },

  getByParams(...args: string[]) {
    const param1 = args[0];
    const param2 = args[1] || undefined;
    const param3 = args[2] || undefined;

    switch (param1) {
      case "sport":
        return prisma.product.findMany({
          where: {
            sport: param2 || { not: "lifestyle" },
            type: param3,
            quantities: { some: { quantity: { gt: 0 } } },
          },
          orderBy: { createdAt: "desc" },
        });
      case "sale":
        switch (param2) {
          case "sport":
            return prisma.product.findMany({
              where: {
                isSale: true,
                sport: param3 || { not: "lifestyle" },
                quantities: { some: { quantity: { gt: 0 } } },
              },
              orderBy: { createdAt: "desc" },
            });
          case undefined:
            return prisma.product.findMany({
              where: {
                isSale: true,
                quantities: { some: { quantity: { gt: 0 } } },
              },
              orderBy: { createdAt: "desc" },
            });
          default:
            return prisma.product.findMany({
              where: {
                isSale: true,
                gender: { has: param2 },
                type: param3,
                quantities: { some: { quantity: { gt: 0 } } },
              },
              orderBy: { createdAt: "desc" },
            });
        }
      default:
        switch (param2) {
          case "sport":
            return prisma.product.findMany({
              where: {
                gender: { has: param1 },
                sport: param3 || { not: "lifestyle" },
                quantities: { some: { quantity: { gt: 0 } } },
              },
              orderBy: { createdAt: "desc" },
            });
          default:
            return prisma.product.findMany({
              where: {
                gender: { has: param1 },
                type: param2,
                subType: param3,
                quantities: { some: { quantity: { gt: 0 } } },
              },
              orderBy: { createdAt: "desc" },
            });
        }
    }
  },

  getBySearch(search: string) {
    return prisma.product.findMany({
      take: 5,
      where: {
        name: { contains: search, mode: "insensitive" },
      },
    });
  },
};
