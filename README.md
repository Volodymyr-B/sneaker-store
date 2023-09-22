# Full Stack E-Commerce app (partially CMS): Next.js 13(App Router), Prisma, Supabase, Typescript, Zustand, Tailwind

![shopping](https://github.com/Volodymyr-B/sneaker-store/raw/main/src/assets/images/shopping.jpg)

This is Full Stack E-Commerce app created with Next.js 13, Prisma, Supabase, NextAuth, Tailwind, React Hook Form, Swiper, Framer Motion, Zustand and other tecnologies

## Key Features

User features:

- User can select product and save it in the cart (persist beetween sessions)
- User can create a personal account which will be saved in the database (password is crypto hashed)
- Registered users have access to their personal profile page
- Both registered and unregistered users can create an order through checkout system
- A successfully completed order will appear in the database and all purchased goods will be taken away from the database
- Registered users have the opportunity to monitor all their purchases on their profile page
- Also registered users can leave comments on the product and this will also be displayed in their personal account
- Implemented live search for products by name
- Adaptation for all screen sizes

Application features:

- Navigation is stored in the database and if it changes, the application will pick up the changes automatically
- Application monitors stock levels of goods and shows them in real time
- User auth data is not stored in application but only on the server, all authorization and path protection is performed via nextAuth
- Products without leftovers will not be displayed in pages (updated once a day), but will be shown during live search
- For general pages and general navigation, link prefetching is disabled to reduce server load, otherwise the focus is on performance.
- As many components as possible are made on React Server Components to improve performance
- Triple level of monitoring and error handling for asynchronous actions:
  - on the client
  - on the server
  - in the database
- Delayed action implemented for the main navigation to reduce unnecessary renderings and improve user experience
- Form control via react-hook-form and zod
- Metadata for improved SEO and web shareability
- Image optimization via Next Image component

## Technologies and Libraries

- [React](https://reactjs.org)
- [Next.js](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Supabase](https://supabase.com/)
- [Prisma](https://www.prisma.io/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [Next Auth](https://next-auth.js.org/)
- [React Hook Form](https://react-hook-form.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons)
- [Swiper](https://swiperjs.com/)
- [Clsx](https://www.npmjs.com/package/clsx)
- [SWR](https://swr.vercel.app/)
- [Zod](https://zod.dev/)
