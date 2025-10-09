import Footer from "@/components/globalComponents/Footer";
import Header from "@/components/globalComponents/Header";
import AboutComponent from "@/components/homeComponents/AboutComponent";
import BlogSection from "@/components/homeComponents/BlogSection";
import Main from "@/components/homeComponents/Main";
import Services from "@/components/homeComponents/Services";
import TitlesSection from "@/components/homeComponents/TitlesSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Main />
      <Services />
      <AboutComponent isAboutUs={false} />
      <TitlesSection />
      {/* <BlogSection /> */}
    </>
  );
}
