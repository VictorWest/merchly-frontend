import ButtonComponent from "@/components/Button";
import { serviceLocations } from "@/data/data";
import Image from "next/image";
import * as motion from "motion/react-client"
import { MdOutlinePhoneInTalk } from "react-icons/md";
import SlideUp from "@/components/transitions/SlideUp";

export default function ServiceLocations(){
    return(
        <div className="bg-white p-10 md:p-20 text-black">
            <SlideUp inView duration={1}>
                <h3 className="text-2xl md:text-3xl text-center md:text-start font-extrabold pb-5">Our Services Locations</h3>
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between text-center md:text-start gap-5 md:gap-0">
                    <p className="md:w-3/7">One company covering multiple partnership areas across the United States.</p>
                    <ButtonComponent bg="#19191A" textColour="white" className="flex items-center gap-3 text-sm md:text-base w-fit inset-shadow-sm inset-shadow-white/100">
                        <span>Contact Us </span>
                        <motion.span
                            animate={{
                                rotate: [0, -15, 15, -10, 10, -5, 5, 0]
                            }}
                            transition={{repeat: Infinity, duration:1, ease:'easeInOut'}}
                        ><MdOutlinePhoneInTalk/></motion.span>
                    </ButtonComponent>
                </div>           
                <div className="mt-10 flex items-center justify-between">
                    <div className="flex mx-auto md:block md:m-0 text-center md:text-start">
                        <div className="hidden bg-[#F4F4F5] md:flex items-center gap-10 px-5 py-1 rounded-full w-fit">
                            <p className="bg-white px-3 py-2 shadow-lg rounded-full">Northeast</p>
                            <p>Midwest</p>
                            <p>South</p> 
                            <p>West</p>
                        </div>
                        <ul className="flex flex-col md:flex-wrap md:h-40 md:mt-10">
                            {serviceLocations.map((state) => (
                                <li key={state} className="font-bold md:border-l-2 border-stone-500 py-1 px-2">{state}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="hidden md:block">
                        <Image src={"/map.png"} alt="US MAP" width={500} height={500} />
                    </div>
                </div>
            </SlideUp>  
        </div>
    )
}