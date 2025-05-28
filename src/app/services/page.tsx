import ServicesFAQ from "@/pages/ServicePages/ServicesFAQ";
import ServicesHero from "@/pages/ServicePages/ServicesHero";
import ServicesPriority from "@/pages/ServicePages/ServicesPriority";

export default function Services(){
    return (
        <div>
            <ServicesHero />
            <ServicesPriority />
            <ServicesFAQ />
        </div>
    )
}