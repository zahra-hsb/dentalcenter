import localFont from "next/font/local";
import "./globals.css";

const yekan1 = localFont({
  src: "./fonts/Yekan.woff",
  variable: "--font-yekan",
  weight: "100 900",
});
const yekan = localFont({
  src: "./fonts/Yekan.woff",
  variable: "--font-yekan",
  weight: "100 900",
});

export const metadata = {
  title: "دنتال سنتر | دکتر وحید گماریان",
  description: "کلینیک دندانپزشکی دکتر وحید گماریان",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${yekan1.variable} ${yekan.variable} antialiased bg-bgColor`}
      >
        {children}
      </body>
    </html>
  );
}
