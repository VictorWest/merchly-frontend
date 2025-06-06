import Image from "next/image";
import Hero from "@/components/Hero";
import { carouselArray } from "../HomePages/AchSection";

export default function AboutHero(){
    return(
        <Hero aboutPage header="Game-changing partner for your business payment processing." paragraph="Payment processing shouldn't be a race to the lowest fees or just another sales pitch because we believe that your businesses deserve more than cookie-cutter solutions and impersonal service.">
            <div className="mt-10 space-y-5">
                <p className="font-extrabold w-2/3 md:w-full mx-auto md:m-0">Our Partnerships and Trusted Clients</p>
                <div className="flex flex-col md:flex-row gap-5 md:gap-0 items-center justify-between md:w-full md:px-20">
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

