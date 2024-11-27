import Footer from "@/components/globalComponents/Footer";
import Header from "@/components/globalComponents/Header";

export default function RootLayout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}