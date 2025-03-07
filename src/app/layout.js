import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";
import { GlobalContextProvider } from "./context";
import JsonLD from "@/components/JsonLD";


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
        <GlobalContextProvider>
          <Suspense fallback={<><Loading /></>}>
            {children}
          </Suspense>
        </GlobalContextProvider>
        <JsonLD />
      </body>
    </html>
  );
}
