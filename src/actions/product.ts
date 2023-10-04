import prisma from "@/lib/config/prisma";
import { notFound } from "next/navigation";
import type { ProductShort } from "@/types/dto-in";

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

  getByParams(page: number, ...args: string[]) {
    const take = 24;
    const skip = page === 0 ? 0 : take * (page - 1);
    const param1 = args[0];
    const param2 = args[1] || undefined;
    const param3 = args[2] || undefined;

    switch (param1) {
      case "sport":
        const sportOptions = {
          sport: param2 || { not: "lifestyle" },
          type: param3,
          quantities: { some: { quantity: { gt: 0 } } },
        };
        return prisma.$transaction([
          prisma.product.count({ where: sportOptions }),
          prisma.product.findMany({
            take,
            skip,
            where: sportOptions,
            orderBy: { createdAt: "desc" },
          }),
        ]);
      case "sale":
        switch (param2) {
          case "sport":
            const saleSportOptions = {
              isSale: true,
              sport: param3 || { not: "lifestyle" },
              quantities: { some: { quantity: { gt: 0 } } },
            };
            return prisma.$transaction([
              prisma.product.count({ where: saleSportOptions }),
              prisma.product.findMany({
                take,
                skip,
                where: saleSportOptions,
                orderBy: { createdAt: "desc" },
              }),
            ]);
          case undefined:
            const saleUndefinedOptions = {
              isSale: true,
              quantities: { some: { quantity: { gt: 0 } } },
            };
            return prisma.$transaction([
              prisma.product.count({ where: saleUndefinedOptions }),
              prisma.product.findMany({
                take,
                skip,
                where: saleUndefinedOptions,
                orderBy: { createdAt: "desc" },
              }),
            ]);
          default:
            const saleDefaultOptions = {
              isSale: true,
              gender: { has: param2 },
              type: param3,
              quantities: { some: { quantity: { gt: 0 } } },
            };
            return prisma.$transaction([
              prisma.product.count({ where: saleDefaultOptions }),
              prisma.product.findMany({
                take,
                skip,
                where: saleDefaultOptions,
                orderBy: { createdAt: "desc" },
              }),
            ]);
        }
      default:
        switch (param2) {
          case "sport":
            const mainSportOptions = {
              gender: { has: param1 },
              sport: param3 || { not: "lifestyle" },
              quantities: { some: { quantity: { gt: 0 } } },
            };
            return prisma.$transaction([
              prisma.product.count({ where: mainSportOptions }),
              prisma.product.findMany({
                take,
                skip,
                where: mainSportOptions,
                orderBy: { createdAt: "desc" },
              }),
            ]);
          default:
            const mainDefaultOptions = {
              gender: { has: param1 },
              type: param2,
              subType: param3,
              quantities: { some: { quantity: { gt: 0 } } },
            };
            return prisma.$transaction([
              prisma.product.count({
                where: mainDefaultOptions,
              }),
              prisma.product.findMany({
                take,
                skip,
                where: mainDefaultOptions,
                orderBy: { createdAt: "desc" },
              }),
            ]);
        }
    }
  },

  async getByParamsWithPagination(
    page: number,
    categories: string[]
  ): Promise<[number, ProductShort[]]> {
    const currentRoute = categories.join("/");
    const res = await fetch(
      `${process.env.SERVER_API_URL}/category/${currentRoute}?page=${page}`
    );
    if (res.status === 404) return notFound();
    return res.json();
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
