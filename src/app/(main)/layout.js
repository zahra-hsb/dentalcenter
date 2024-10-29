import Footer from "@/components/globalComponents/Footer";
import Header from "@/components/globalComponents/Header";
import { Suspense } from "react";
import Loading from "../loading";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`antialiased bg-bgColor relative`}
            >
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}