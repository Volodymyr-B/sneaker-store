export const nothing = null;

// getByParams2(cursor: string, ...args: string[]) {
//   const take = 4;
//   const skip = 1;
//   const param1 = args[0];
//   const param2 = args[1] || undefined;
//   const param3 = args[2] || undefined;

//   switch (param1) {
//     case "sport":
//       const sportOptions = {
//         sport: param2 || { not: "lifestyle" },
//         type: param3,
//         quantities: { some: { quantity: { gt: 0 } } },
//       };
//       return prisma.product.findMany({
//         take,
//         skip,
//         where: sportOptions,
//         orderBy: { createdAt: "desc" },
//       });

//     case "sale":
//       switch (param2) {
//         case "sport":
//           const saleSportOptions = {
//             isSale: true,
//             sport: param3 || { not: "lifestyle" },
//             quantities: { some: { quantity: { gt: 0 } } },
//           };

//           return prisma.product.findMany({
//             take,
//             skip,
//             where: saleSportOptions,
//             orderBy: { createdAt: "desc" },
//           });

//         case undefined:
//           const saleUndefinedOptions = {
//             isSale: true,
//             quantities: { some: { quantity: { gt: 0 } } },
//           };

//           return prisma.product.findMany({
//             take,
//             skip,
//             where: saleUndefinedOptions,
//             orderBy: { createdAt: "desc" },
//           });

//         default:
//           const saleDefaultOptions = {
//             isSale: true,
//             gender: { has: param2 },
//             type: param3,
//             quantities: { some: { quantity: { gt: 0 } } },
//           };

//           return prisma.product.findMany({
//             take,
//             skip,
//             where: saleDefaultOptions,
//             orderBy: { createdAt: "desc" },
//           });
//       }
//     default:
//       switch (param2) {
//         case "sport":
//           const mainSportOptions = {
//             gender: { has: param1 },
//             sport: param3 || { not: "lifestyle" },
//             quantities: { some: { quantity: { gt: 0 } } },
//           };

//           return prisma.product.findMany({
//             take,
//             skip,
//             where: mainSportOptions,
//             orderBy: { createdAt: "desc" },
//           });

//         default:
//           const mainDefaultOptions = {
//             gender: { has: param1 },
//             type: param2,
//             subType: param3,
//             quantities: { some: { quantity: { gt: 0 } } },
//           };

//           return prisma.product.findMany({
//             take,
//             skip,
//             cursor: { id: cursor },
//             where: mainDefaultOptions,
//             orderBy: { createdAt: "desc" },
//           });
//       }
//   }
// },

// import { ProductAction } from "@/actions/product";
// import { NextResponse } from "next/server";

//////////////////////////////////////---INFINITY---///////////////////////////////////////
// export async function GET(
//   request: Request,
//   { params }: { params: { categories: string[] } }
// ) {
//   try {
//     console.log(params.categories);
//     const { searchParams } = new URL(request.url);
//     const cursor = searchParams.get("cursor") || "";
//     const data = await ProductAction.getByParams2(cursor, ...params.categories);
//     if (products.length === 0)
//       return NextResponse.json({
//         data: [],
//         metaData: {
//           lastCursor: null,
//           hasNextPage: false,
//         },
//       });

//     const lastPostInResult = products[products.length-1]
//     return NextResponse.json(data);
//   } catch (err) {
//     console.log("warning", err);
//     return NextResponse.json("error", {
//       status: 500,
//       statusText: (err as Error).message,
//     });
//   }
// }
// "use client";
// import { get } from "@/lib/utils/crud";
// import { ProductShort } from "@/types/dto-in";
// import { useState } from "react";
// import useSWRInfinite from "swr/infinite";
// import { ProductCard } from "./product-card";

// const totalCount = 24;

// export const Infinity = () => {
//   const [init, setInit] = useState(false);
//   const getKey = (pageIndex: number, previousPageData: ProductShort[]) => {
//     if (!init) return null;
//     if (previousPageData && !previousPageData.length) return null;
//     if (pageIndex === 0)
//       return `http://localhost:3000/api/category/men?cursor=${`clmhqs1vc0009ufzoo5amgj4z`}`;
//     return `http://localhost:3000/api/category/men?cursor=${
//       previousPageData[previousPageData.length - 1].id
//     }`;
//   };
//   const { isLoading, data, size, setSize } = useSWRInfinite<ProductShort[]>(
//     getKey,
//     get
//   );

//   //   if (!data) return <div>loading...</div>;

//   const isLoadingMore =
//     isLoading || (size > 0 && data && typeof data[size - 1] === "undefined");
//   const isHasMore = data?.flat().length !== totalCount - 4;

//   return (
//     <div>
//       <button
//         disabled={!isHasMore}
//         onClick={() => {
//           setSize(size + 1);
//           setInit(true);
//         }}
//       >
//         {isHasMore ? "click" : "nothing to load"}
//       </button>
//       <div
//         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
//           xl:grid-cols-4 gap-6"
//       >
//         {data?.map((products) => {
//           return products.map((prod) => (
//             <ProductCard product={prod} key={prod.id} />
//           ));
//         })}
//       </div>
//       {isLoadingMore && <div>loading...</div>}
//     </div>
//   );
// };
//////////////////////////////////////---INFINITY---///////////////////////////////////////

// const createNav = await prisma.subType.create({
//   data: {
//     name: "test",
//     uniqueName: "testTest",
//     typeName: "mens-shoes",
//   },
// });

// metadata for dynamic pages +++
// install icons +++
// tw merge +++
// cart page +++
// category page +++
// breadcrumbs in [category] page +++
// live search with debounce and swr +++
// add types for FE +++
// add state manager +++
// create cart logic +++
// connect state to Cart page +++
// if quantity of product === 0 - not display that size(make this on request level atm) +++
// create auth +++
// rename lib to config and utils +++
// add createdAt fields to categories +++
// create auth pages +++
// add auth to db +++
// adaptive CSS for auth page +++
// create context folder and contexts +++
// add pick quantity options for prod in cart +++
// add use server flag to all DB calls????? 0_0 (not actual now)
// create Order tables and relations to User and Product +++
// create checkout page +++
// create checkout API +++
// add relation to db +++
// next auth middleware +++
// add client Session to checkout(atm i have both getServerSession in Profile and Checkout) +++
// create header-links component +++
// do i need sessionProvider if my session will be on server only?? use it now for nav +++
// create Profile Page +++
// add Toaster +++
// relocate custom Toaster to utils? coz it is fn=>void +++(deleted)
// fix toaster -_- +++
// create spinners and disable all buttons while async actions going +++
// add possibility to add comments to product for registered users +++
// create comment textfield in Detailed page +++
// add quantity of products in cart to cart-link +++
// rewrite product in db for more andvance capabilities +++
// create UseUser hook(not needed now) ++-(use sessions from next-auth)
// connect useUser and Profile page (not needed now) ++-(use sessions from next-auth)
// rewrite services from object to functions +-- (no server actions now so go with objects)
// add name of product and img to orderitem +++
// css profile page +++
// rename services to actions(or not- yes) +++
// install axios for server requests?? ---
// fix header position (sticky best option for server component) +++
// delay for onMouseEnter for nav bar +++
// check memory leak in buttonWithPopUp +++
// check useDebounce in search Bar(mb need to change state there to useRef) +++
// fix toaster in useCart(cant, its look good there) +++
// create Image-component??? +++
// css search results +++
// fix big z-index of select options +++
// add redirect page after finishing order! success page in (information) +++
// wtf is app/category folder??? 0_0 +++
// create global state for modal +++
// create modal button, add functionality +++
// fix modal +++
// create mobile header nav :( +++
// rebase buttonWithPopUp to category-bar folder and mb rename +++
// rebase cart/checkout/auth/profile to (user) folder +++
// css category page and card +++
// create swiper+++
// fix footer components and constants there +++
// fix sport nav(remove lifestyle from query) +++
// not load prod if all his quantities = 0 +++
// css homepage +++
// rename lib/config/config to hash +++
// put prisma in config +++
// create POST fn for useSWR +++
// check comment section to reBase fetch(use useSWR there) +++
// delete services folder +++
// delete serverActions and perlace to useSWR +++
// change font globally __Urbanist_4e7e4a,__Urbanist_Fallback_4e7e4a???  +++
// stay with getTwenty or change???(ProductAction) +++
// add payment system(canseled) ---
// hooks to Global and Instances +++
// recheck types(dto-in/dto-out) +++
// load types from @prisma/client??? +++
// fix search-results position when scroll(go with this) +++
// up comment section user check and condition render +++
// css cart for mobile dev +++
// add functionality to buttons +++
// put type mark to all interface imports +++
// 404 handling +++
// lazy image +++
// make all bold /span > /b +++
// check cart form +++
// router refresh at successful create order +++
// css 404 and check global 404 app/not-found for root-header missing +++
// fix 404 in categories +++
// check next Auth sessions +++
// reCheck swiper(mb create config for options?) and hydration issues +++
// home buton to success +++
// change text-color on btn +++
// fix double export in prisma/cofig +++
// package sharp? +++
// make gender array again in product table(ore not) +++
// calculate discount +++
// delete success page and make redirect in checkout to cart or "/"?? +++
// crate tailwind colors palette +++
// remove comments from components and actions +++
// add unexpected error handling in actions +++
// upload images to DB +++
// reCheck all routes to server and DB calls( check response errors also) +++
// delete unused constants and temp +++
// check all API calls and routes for URL path, and rewrite them for deploy +++
// check MAth.ceil and make price decimal/float or make fn for calc (go with int) +++
// fix sport tennis async +++
// remove next auth client provider and useSession from DetailedPage (for now no(nav-bar))
// do i need prefetch??? (disable in categories) +++
// framer-motion +++
// create scrollToTop btn +++
// pagination +++
// cache behavior for searchParams and fail to loadscreens 0_o +++
// (Page navigation & caching with searchParams is broken) fixed +++
// (Add searchParams to leaf cache key ) nope (key to suspense) ---

// fix adaptive paddings / modal shadow and btn padding +++
// paypal neutral toast +++
// disable scroll on global modal(add focus to search when open) +++
// footer mobile screen fix +++
// info that only registered users can leave a comment +++
// breadcrump for current url +++
// add name/mail to order for registered users +++
// redirect from profile if not user +++
// back btn at detailed product +++
// better discount in cart +++
// remove 1 emoji from profile +++
// check pasword security alert +++
// fix back btn and hover in mobile devices +++
// work in progress cart-bag +++
// make subscribe footer +++
// create README +++
// styling for pagination +++
// check suspense in SignIn +++
// improve product card view(animations etc) +++

// change loading from isMutating to isSubmitting???(seems no) ---
// React-Query and off refetch on CRUD?? (no for now) ---
// install axios(optional) (for now not needed) ---
// make exclude FN for getUserByEmail(or not?) ---
// add scroll to select (nope) ---
// make cart synchronized with DB or turn off persist ++-
// mb make some quantity check when creating order?
// add state to searchResult or not
// make userByEmailShort
// memo/callback

// fix small scroll and header shake
// add comment to order form
// add size charts(EU/ENG)
// check mail caseinsensitivity
