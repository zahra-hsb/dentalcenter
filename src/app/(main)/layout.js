import Footer from "@/components/globalComponents/Footer";
import Header from "@/components/globalComponents/Header";
import { Suspense } from "react";
import Loading from "../loading";
import LoadingUI from "@/components/globalComponents/Loading";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`antialiased bg-bgColor relative`}
            >
                <Header />
                <Suspense fallback={<><LoadingUI /></>}>
                    {children}
                </Suspense>
                <Footer />
            </body>
        </html>
    )
}