import AboutSection from "@/Components/aboutPage/AboutSection";
import CTASection from "@/Components/aboutPage/CTASection ";
import InsightsSection from "@/Components/aboutPage/InsightsSection ";
import TeamSection from "@/Components/aboutPage/TeamSection";
import WhyChooseSection from "@/Components/aboutPage/WhyChooseSection";
import WhyUAEParallax from "@/Components/aboutPage/WhyUAEParallax ";
import HeroSection from "@/Components/Common/HeroSection";
import InnerBanner from "@/Components/Common/InnerBanner";
import Footer from "@/Components/Footer/Footer";
import ScheduleMeeting from "@/Components/HomePage/ScheduleMeeting/ScheduleMeeting";
import Navbar from "@/Components/Navbar/Navbar";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <InsightsSection />
      <AboutSection />
      <ScheduleMeeting />
      <WhyUAEParallax/>
      <TeamSection />
      <WhyChooseSection />
      {/* <CTASection/> */}
      <InnerBanner
        title={"Ready to Launch Your Business in Dubai"}
        description={
          "Start smart with ADL Business Solutions. We manage licensing, paperwork, and compliance so you can focus on building your business empire."
        }
        buttonText={"Start Your Business Now"}
        link={"/contact"}
      />
      <Footer />
    </div>
  );
};

export default page;
