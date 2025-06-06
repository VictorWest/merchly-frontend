"use client"
import Image from "next/image";
import { getClientStories, Testimony } from "@/data/data";
import { useEffect, useState } from "react";
import { motion } from "motion/react"
import SlideUp from "@/components/transitions/SlideUp";

export default function StorySection(){
    const [ page, setPage ] = useState(1)
    const [ data, setData ] = useState<Testimony[]>([])

    useEffect(() => {
        const result = JSON.parse(getClientStories())
        setData(result)
    }, [])

    useEffect(() => {
        if(data.length == 0) return;

        const interval = setInterval(() => {
            setPage((prev) => prev >= data.length ? 1 : prev + 1)
        }, 10000)

        return () => clearInterval(interval)
    }, [data.length])

    return(
        <div className="relative group p-10 md:p-20 rounded-lg bg-black border border-gray-800 overflow-hidden">
            <SlideUp inView duration={1}>
                <div className="relative z-10 text-center md:text-start">
                    <div className="flex justify-center md:justify-start mb-5 md:mb-0"><Image src='/logo-expanded.png' alt="Logo" width={100} height={100} /></div>
                    <h3 className="text-3xl font-extrabold py-5">Our Story</h3>
                    <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 w-full md:h-72 mt-10">
                        <div className="md:w-1/2 h-full flex flex-col justify-between">
                            <p className="text-base md:text-lg font-bold">Building Lasting Client Relationships</p>
                            <hr style={{backgroundColor: 'white', border: 'none', height: '1px', width: '100%'}} className="my-5"/>
                            <p className="text-base md:text-lg font-bold">Catalyzing Community Transformation</p>
                            <hr style={{backgroundColor: 'white', border: 'none', height: '1px', width: '100%'}} className="my-5"/>
                            <p className="text-base md:text-lg font-bold">Supporting Local Businesses in Key Economic Hubs</p>
                            <hr style={{backgroundColor: 'white', border: 'none', height: '1px', width: '100%'}} className="my-5"/>
                        </div>
                        <div className="space-y-5 md:w-1/2 h-full font-light text-sm md:text-base">
                            <p>Unlike traditional processors that focus on superficial savings and generic point-of-sale systems, Merchly Io prioritizes strong, long-term relationships with its clients.</p>
                            <p>We invest time in understanding the unique challenges and aspirations of each business, ensuring their services align with individual needs.</p> 
                            <p>This approach fosters trust, promotes mutual growth, and ensures that their solutions evolve alongside the businesses we support, embodying their ethos of prioritizing partnerships over mere transactions.</p>
                        </div>
                    </div>
                </div>
            </SlideUp>

            <motion.div initial={{opacity:0}} whileInView={{opacity:1}} className="bg-gradient-to-b from-[#28DC6E66]/70 to-[#28DC6E66]/40 rounded-2xl p-10 mt-10 space-y-10">
                <div className="flex w-full justify-center md:justify-between text-2xl font-extrabold">
                    <h2>Client Story</h2>
                    <h2 className="hidden md:block"><svg width="41" height="35" viewBox="0 0 41 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.72 34.3982V23.5182C23.72 17.2888 25.1707 12.1688 28.072 8.15816C31.0587 4.06217 35.368 1.41683 41 0.222168V7.26217C38.2694 7.94484 36.136 9.22484 34.6 11.1022C33.064 12.8942 32.1254 15.1128 31.784 17.7582H38.44V34.3982H23.72ZM0.0400391 34.3982V23.5182C0.0400391 17.2888 1.49071 12.1688 4.39204 8.15816C7.37871 4.06217 11.688 1.41683 17.32 0.222168V7.26217C14.5894 7.94484 12.456 9.22484 10.92 11.1022C9.38404 12.8942 8.44537 15.1128 8.10404 17.7582H14.76V34.3982H0.0400391Z" fill="white"/></svg></h2>
                </div>
                {data.length !== 0 && <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
                    <div className="flex flex-col md:flex-row gap-5 justify-center items-center text-center md:text-start">
                        <Image className="rounded-md" key={data[page - 1].id} src={data[page - 1].imageUrl} width={100} height={100} alt={`Image ${data[page - 1].id}`} />
                        <div className="space-y-1">
                            <h3 className="font-extrabold text-lg md:text-xl">{data[page - 1].name}</h3>
                            <p className="md:w-2/3 text-xs md:text-sm">{data[page - 1].occupation}</p>
                        </div>
                    </div>
                    <div className="mt-10 md:mt-0 text-center md:text-start md:w-1/2">"{data[page - 1].review}"</div>
                </div>}
            </motion.div>
            
            {/* Glowing edge - Top Right */}
            <div className="absolute top-[-20] right-[-20] w-64 h-64 bg-gradient-to-br from-[#3DDF7C] to-transparent opacity-70 blur-[80px]"></div>

            {/* Glowing edge - Bottom Left */}
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tl from-[#3DDF7C] to-transparent opacity-70 blur-[80px]"></div>
        </div>
    )
}