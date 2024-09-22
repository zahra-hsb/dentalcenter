import localFont from "next/font/local";
import "./globals.css";


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
        {children}
      </body>
    </html>
  );
}
