import Hero from "@/components/Hero";
import JoinUs from "@/components/JoinUs";
import Image from "next/image";
import * as motion from "motion/react-client"

export default function CareerHero(){
    return(
        <div>
            <Hero header="Career" paragraph="Let’s join our flexible environment, helping you to achieve your best working experience with your creative ideas.">
                <motion.div initial={{y:400,opacity:0}} animate={{y:0, opacity:1}} transition={{duration:1}} className="hidden md:block">
                    <Image src="/career-story/image.png" alt="Career" width={1000} height={1000} className="w-2/3 rounded-t-4xl object-cover mx-auto z-10" />
                </motion.div>
            </Hero>
            <div className="bg-white text-black p-10 md:p-20">
                <div className="flex flex-col md:flex-row md:*:w-1/2 gap-5 md:gap-0">
                    <p className="font-extrabold text-xl md:text-3xl">Vision</p>
                    <p className="text-sm md:text-base">We believe that payment solution need to be simple, giving freedom to people in order to achieve the best payment experience.<span>We built a payment platform that prioritizes what truly matters, partnerships, trust, and long-term success.</span></p>
                </div>
                <hr style={{backgroundColor: '#D5D5D5', border: 'none', height: '0.5px', width: '100%'}} className="my-5"/>
                <div className="flex flex-col md:flex-row md:*:w-1/2 gap-5 md:gap-0">
                    <p className="font-extrabold text-xl md:text-3xl">Mission</p>
                    <p className="text-sm md:text-base">We believe that payment solution need to be simple, giving freedom to people in order to achieve the best payment experience.<span>We built a payment platform that prioritizes what truly matters, partnerships, trust, and long-term success.</span></p>
                </div>
                <hr style={{backgroundColor: '#D5D5D5', border: 'none', height: '0.5px', width: '100%'}} className="my-5"/>
            </div>
            <div className="relative overflow-hidden py-3 h-15">
                <div className="absolute flex items-center gap-10 animate-infinite-scroll">
                    {[1,2,3,4,5,6,7,8].map((id) => (
                        <JoinUs key={id} />
                    ))}
                </div>
            </div>
        </div>
    )
}