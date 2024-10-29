import localFont from "next/font/local";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";


export const metadata = {
  title: "دنتال سنتر | دکتر وحید گماریان",
  description: "کلینیک دندانپزشکی دکتر وحید گماریان",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-bgColor`}
      >
      <Suspense fallback={<><Loading /></>}>
        {children}
      </Suspense>
      </body>
    </html>
  );
}
