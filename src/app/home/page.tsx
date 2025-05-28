import AchSection from "@/pages/HomePages/AchSection";
import POSWrapper from "@/pages/HomePages/POSWrapper";
import LandingHero from "@/pages/HomePages/LandingHero";
import ContentWrapper from "@/pages/HomePages/ContentWrapper";
import Testimonials from "@/pages/HomePages/Testimonials";

export default function HomePage(){
    return(
        <div>
            <LandingHero />
            <AchSection />
            <POSWrapper />
            <ContentWrapper />
            <Testimonials />
        </div>
    )
}