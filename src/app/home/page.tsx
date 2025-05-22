import AchSection from "@/pages/AchSection";
import POSWrapper from "@/pages/POSWrapper";
import LandingHero from "@/pages/LandingHero";
import Navigation from "@/pages/Navigation";
import ContentWrapper from "@/pages/ContentWrapper";
import Testimonials from "@/pages/Testimonials";
import Footer from "@/pages/Footer";

export default function HomePage(){
    return(
        <div>
            <Navigation />
            <LandingHero />
            <AchSection />
            <POSWrapper />
            <ContentWrapper />
            <Testimonials />
            <Footer />
        </div>
    )
}