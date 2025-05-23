import AboutHero from "@/pages/AboutHero";
import AboutSection from "@/pages/AboutSection";
import ServiceLocations from "@/pages/ServiceLocations";
import StorySection from "@/pages/StorySection";
import TeamSection from "@/pages/TeamSection";

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