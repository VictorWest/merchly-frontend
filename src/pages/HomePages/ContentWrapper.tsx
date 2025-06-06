"use client"
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react"

export default function ContentWrapper(){
    const [isClicked, setIsClicked] = useState(1)
    
    return(
        <div className="bg-white flex flex-col gap-5 text-black md:px-20 py-10">
            <header className="w-fit space-y-5 text-center md:text-start">
                <p className="text-[#28DC6E]">Workflow</p>
                <h2 className="text-3xl font-bold md:w-3/5 px-10 md:px-0">This is how we help you grow your business.</h2>
            </header>
            <div className="flex flex-col md:flex-row gap-10 md:gap-20 pt-10 md:pt-0">
                <AnimatePresence mode="popLayout">
                    <motion.div key={`cw-${isClicked}`}  initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -100, opacity: 0 }} transition={{ duration: 0.4, ease: "easeInOut" }} className="w-1/2 hidden md:block"><Image src={`/content-wrapper/cw-${isClicked}.png`} alt="cw-1" width={400} height={420} className="object-contain shadow-md rounded-xl w-full h-full"/></motion.div>
                </AnimatePresence>
                <div className="flex flex-col gap-10 px-10 md:px-0 text-center md:text-start">
                    <div className="space-y-5 cursor-pointer" onClick={() => setIsClicked(1)}>
                        <h5 className="font-bold text-xl">Book a call</h5>
                        <p>We&lsquo;re all about partnerships, so let&lsquo;s start with a quick call to understand your business needs. In addition, we will discuss the process to start.</p>
                        <hr style={{backgroundColor: isClicked == 1 ? 'green' : 'black', border: 'none', height: '4px'}} />
                    </div>
                    <div className="space-y-5 cursor-pointer" onClick={() => setIsClicked(2)}>
                        <h5 className="font-bold text-xl">Onboarding</h5>
                        <p>We handle the paperwork, setting up the perfect solution for your business, and kickstart your payment processing journey.</p>
                        <hr style={{backgroundColor: isClicked == 2 ? 'green' : 'black', border: 'none', height: '4px'}} />
                    </div>
                    <div className="space-y-5 cursor-pointer" onClick={() => setIsClicked(3)}>
                        <h5 className="font-bold text-xl">Grow</h5>
                        <p>We adapt to your evolving needs, ensuring that your payment processing remains efficient and hassle-free.</p>
                        <hr style={{backgroundColor: isClicked == 3 ? 'green' : 'black', border: 'none', height: '4px'}} />
                    </div>
                </div>
            </div>
        </div>
    )
}