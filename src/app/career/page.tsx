import CareerHero from "@/pages/CareerPages/CareerHero";
import CareerPositions from "@/pages/CareerPages/CareerPositions";
import ServicesFAQ from "@/pages/ServicePages/ServicesFAQ";

export default function CareerPage(){

    return(
        <div>
            <CareerHero />
            <CareerPositions />       
            <ServicesFAQ />     
        </div>
    )
}