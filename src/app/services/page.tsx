import ServicesFAQ from "@/pages/ServicesFAQ";
import ServicesHero from "@/pages/ServicesHero";
import ServicesPriority from "@/pages/ServicesPriority";

export default function Services(){
    return (
        <div>
            <ServicesHero />
            <ServicesPriority />
            <ServicesFAQ />
        </div>
    )
}