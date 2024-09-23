import Header from "@/components/Header";
import Main from "@/components/homeComponents/Main";
import Services from "@/components/homeComponents/Services";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <Services />
    </>
  );
}
