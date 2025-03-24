import Footer from "@/components/globalComponents/Footer";
import Header from "@/components/globalComponents/Header";

export const metadata = {
    title: 'مطب دکتر گماریان | مطب دندانپزشکی در شهرقدس',
    description: " ،کلینیک دندانپزشکی و زیبایی دکتر وحید گماریان - خدمات مطب: ایمپلنت اقساطی، روکش دندان، لمینت، ترمیم دندان ها، درمان ریشه، پروتز متحرک و دندانپزشکی اطفال در شهرقدس",
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