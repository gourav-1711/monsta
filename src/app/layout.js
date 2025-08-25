import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./comman/Header";
import Footer from "./comman/Footer";
import ScrollTop from "./comman/ScrollTop";
import { ReduxProvider } from "@/app/(redux)/providers/ReduxProvider";
import { Toaster } from "@/components/ui/sonner";
import { cookies } from "next/headers";

export const metadata = {
  title: "Monsta",
  description: "shop all your favorite products here",
};

export default async function RootLayout({ children }) {
  const cookieStore = await cookies();

  const userCookie = cookieStore.get("user");
  const cartCookie = cookieStore.get("cart");
  const wishlistCookie = cookieStore.get("wishlist");

  const initialState = {
    auth: {
      user: userCookie ? userCookie.value : null,
      isLogin: !!userCookie,
      details: {},
    },
    cart: {
      cartItems: cartCookie ? JSON.parse(cartCookie.value) : [],
      totalPrice: 0,
      totalQuantity: 0,
    },
    wishlist: {
      wishlistItems: wishlistCookie ? JSON.parse(wishlistCookie.value) : [],
    },
  };
  return (
    <html lang="en">
      <body className="no-scroll-arrows overflow-y-scroll">
        <ReduxProvider preloadedState={initialState}>
          <Header />
          <Toaster />
          {children}
          <ScrollTop />
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
