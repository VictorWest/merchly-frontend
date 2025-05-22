"use client"
import Image from "next/image";
import { useState } from "react";

export default function ContentWrapper(){
    const [isClicked, setIsClicked] = useState(1)
    
    return(
        <div className="bg-white flex flex-col gap-5 text-black px-20 py-10">
            <header className="w-fit space-y-5">
                <p className="text-[#28DC6E]">Workflow</p>
                <h2 className="text-3xl font-bold w-3/5">This is how we help you grow your business.</h2>
            </header>
            <div className="flex gap-20">
                <Image src={`/content-wrapper/cw-${isClicked}.png`} alt="cw-1" width={400} height={420} className="shadow-md rounded-xl"/>
                <div className="flex flex-col justify-center gap-10">
                    <div className="space-y-5 cursor-pointer" onClick={() => setIsClicked(1)}>
                        <h5 className="font-bold text-xl">Book a call</h5>
                        <p>We're all about partnerships, so let's start with a quick call to understand your business needs. In addition, we will discuss the process to start.</p>
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