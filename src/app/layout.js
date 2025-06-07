import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./comman/Header";
import Footer from "./comman/Footer";
import ScrollTop from "./comman/ScrollTop";
import { ReduxProvider } from "@/lib/providers/ReduxProvider";
import { Toaster } from "@/components/ui/sonner";

export const metadata = {
  title: "Monsta",
  description: "shop all your favorite products here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="no-scroll-arrows overflow-y-scroll">
        <ReduxProvider>
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
