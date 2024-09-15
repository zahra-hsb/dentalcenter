import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/Iranian Sans.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/Iranian Sans.ttf",
  variable: "--font-geist-mono",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-bgColor`}
      >
        {children}
      </body>
    </html>
  );
}
