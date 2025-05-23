import Image from "next/image";
import { carouselArray } from "./AchSection";

export default function AboutHero(){
    return(
        <div className="pt-40 bg-[#2A2A2D]">
            <div className="relative pb-10"> 
                <main className="text-center space-y-7 flex flex-col justify-center bg-[url('/grid.png')] bg-cover">
                    <h1 className="text-4xl font-extrabold w-2/5 mx-auto">Game-changing partner for your business payment processing.</h1>
                    <p className="text-sm w-2/4 mx-auto">Payment processing shouldn't be a race to the lowest fees or just another sales pitch because we believe that your businesses deserve more than cookie-cutter solutions and impersonal service.</p>
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
                </main>
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#21C963] to-transparent opacity-30"></div>
            </div>            
        </div>
    )
}

