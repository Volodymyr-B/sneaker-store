import { Metadata } from "next";
import { Quicksand } from "next/font/google";
import AuthProvider from "@/providers/auth-provider";
import { ModalProvider } from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";
import { RootFooter } from "@/components/footers/root-footer";
import RootHeader from "@/components/headers/root-header";
import "@/styles/globals.css";

const font = Quicksand({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  title: "Sneaker Store",
  description: "e-commerce fully functional web app",
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={font.className}>
        <AuthProvider>
          <ToastProvider />
          <ModalProvider />
          {/* @ts-expect-error Server Component */}
          <RootHeader />
          <main className="flex-auto flex flex-col">
            <div className="h-main_header" />
            {children}
          </main>
          <RootFooter />
        </AuthProvider>
      </body>
    </html>
  );
};
export default RootLayout;

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

// fix adaptive paddings / modal shadow and btn padding +++
// paypal neutral toast +++
// disable scroll on global modal(add focus to search when open) +++
// footer mobile screen fix +++
// info that only registered users can leave a comment +++
// breadcrump for current url +++
// add name/mail to order for registered users +++
// redirect from profile if not user +++

// change loading from isMutating to isSubmitting???(seems no) ---
// React-Query and off refetch on CRUD?? (no for now) ---
// install axios(optional) (for now not needed) ---
// make exclude FN for getUserByEmail(or not?) ---
// add scroll to select (nope) ---
// check MAth.ceil and make price decimal/float or make fn for calc (go with int) ---
// make cart synchronized with DB or turn off persist ++-
// remove next auth client provider and useSession from DetailedPage (for now no(nav-bar))
// mb make some quantity check when creating order?
// add state to searchResult or not
// pagination
// framer-motion
// change disabled btn color
//  make userByEmailShort

// back btn at detailed product
// check pasword security alert
// fix small scroll and header shake
// better discount in cart
