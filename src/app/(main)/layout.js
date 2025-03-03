import Footer from "@/components/globalComponents/Footer";
import Header from "@/components/globalComponents/Header";

export const metadata = {
    title: 'مطب دکتر گماریان',
    description: ' مطب دندانپزشکی و زیبایی',
}

export default function RootLayout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}