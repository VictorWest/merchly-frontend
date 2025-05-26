import Image from "next/image";
import { carouselArray } from "./AchSection";
import Hero from "@/components/Hero";

export default function AboutHero(){
    return(
        <Hero header="Game-changing partner for your business payment processing." paragraph="Payment processing shouldn't be a race to the lowest fees or just another sales pitch because we believe that your businesses deserve more than cookie-cutter solutions and impersonal service.">
            <div className="mt-10 space-y-5">
                <p className="font-extrabold">Our Partnerships and Trusted Clients</p>
                <div className="flex items-center justify-between w-full px-20">
                    {carouselArray.map((item) => (
                        <Image 
                            key={item}
                            src={`/partners/white-lettering/image${item}.png`} 
                            className="mx-4 text-white" 
                            width={100} 
                            height={100} 
                            alt={`Image ${item}`}
                        />
                    ))}
                </div>
            </div>
        </Hero>
    )
}

