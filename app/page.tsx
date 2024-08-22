import AboutUsSection from "@/components/aboutUsSection";
import ContactSection from "@/components/contactSection";
import HeaderPage from "@/components/headerPage";
import InitBanner from "@/components/initBanner";
import TecnologiesSection from "@/components/tecnologiesSection";
import ProductSection from "@/components/productSection";
import NewServicesSection from "@/components/newServicesSection";

export default function Home() {
  return (
    <main className="bg-backgroundDark text-colorText">
        <HeaderPage/>
        <InitBanner/>
        <AboutUsSection/>
        <NewServicesSection/>
        <TecnologiesSection/>
        <ProductSection/>
        <ContactSection/>
    </main>
  );
}
