import HeroSection from "@/Components/Common/HeroSection";
import InnerBanner from "@/Components/Common/InnerBanner";
import Footer from "@/Components/Footer/Footer";
import ScheduleMeeting from "@/Components/HomePage/ScheduleMeeting/ScheduleMeeting";
import Navbar from "@/Components/Navbar/Navbar";
import Services from "@/Components/ServicePage/Services";

export default function Serivces() {
  return (
    <div>
        <Navbar/>
        <HeroSection title={"Borem ipsum dolor sit"} subTitle={"in Dubaiamet, consectetur "} decription={"Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.ADL Business Solutions simplifies the entire process of company setup in Dubai and across the UAE — from trade licensing to operational compliance."} buttonText={"Get a Free Consultation"} url={"/"} />
        <Services/>
        <ScheduleMeeting/>
        <InnerBanner title={"Ready to Launch Your Business in Dubai"} description={"Let ADL Business Solutions handle the paperwork while you focus on growth. We make business setup seamless, fast, and affordable."} buttonText={"Start Your Business Now"}/>
        <Footer/>
    </div>
  )}