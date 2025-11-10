
import Blogs from "@/Components/BlogPage/Blogs";
import HeroSection from "@/Components/Common/HeroSection";
import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";

import React from "react";

const page = () => {
    return (
        <div>
            <Navbar />
            <HeroSection
                title={"Blogs"}

                decription={"Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. cnt per "}

            />
<Blogs/>


            <Footer />
        </div>
    );
};

export default page;
