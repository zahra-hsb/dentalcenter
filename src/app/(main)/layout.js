import Footer from "@/components/globalComponents/Footer";
import Header from "@/components/globalComponents/Header";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`antialiased bg-bgColor`}
            >
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}