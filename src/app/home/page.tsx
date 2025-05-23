import AchSection from "@/pages/AchSection";
import POSWrapper from "@/pages/POSWrapper";
import LandingHero from "@/pages/LandingHero";
import ContentWrapper from "@/pages/ContentWrapper";
import Testimonials from "@/pages/Testimonials";

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