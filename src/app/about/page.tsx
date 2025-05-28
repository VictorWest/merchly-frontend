import AboutHero from "@/pages/AboutPages/AboutHero";
import AboutSection from "@/pages/AboutPages/AboutSection";
import ServiceLocations from "@/pages/AboutPages/ServiceLocations";
import StorySection from "@/pages/AboutPages/StorySection";
import TeamSection from "@/pages/AboutPages/TeamSection";

export default function AboutPage(){
    return(
        <div>
            <AboutHero />
            <AboutSection />
            <StorySection />
            <TeamSection />
            <ServiceLocations />
        </div>
    )
}