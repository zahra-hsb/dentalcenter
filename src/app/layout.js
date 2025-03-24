import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";
import { GlobalContextProvider } from "./context";
import JsonLD from "@/components/JsonLD";


export const metadata = {
  title: "دنتال سنتر | دکتر وحید گماریان",
  description: " ،کلینیک دندانپزشکی و زیبایی دکتر وحید گماریان - خدمات مطب: ایمپلنت اقساطی، روکش دندان، لمینت، ترمیم دندان ها، درمان ریشه، پروتز متحرک و دندانپزشکی اطفال در شهرقدس",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-bgColor max-w-screen-2xl mx-auto`}
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
