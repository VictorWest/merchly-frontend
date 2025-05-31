"use client"
import { useState } from "react";
import ButtonComponent from "./Button";

export default function JoinNewsletter({className}:{className?: string}){
    const [ emailInput, setEmailInput ] = useState<string>()
    
    return(
        <div className={`bg-black w-1/4 p-10 text-white relative flex flex-col gap-5 rounded-3xl ${className}`}>
            <h3 className="text-2xl font-bold">Join our newsletter to stay update</h3>
            <p>Get notified for every of our latest blog content just with entering your email!</p>
            <div className="flex items-center border-1 border-stone-700 px-2 z-10 bg-white text-black rounded-lg">
                <span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 4.5V11.5C14.5 12.3284 13.8284 13 13 13H3C2.17157 13 1.5 12.3284 1.5 11.5V4.5M14.5 4.5C14.5 3.67157 13.8284 3 13 3H3C2.17157 3 1.5 3.67157 1.5 4.5M14.5 4.5V4.66181C14.5 5.1827 14.2298 5.6663 13.7861 5.93929L8.78615 9.01622C8.30404 9.3129 7.69596 9.3129 7.21385 9.01622L2.21385 5.93929C1.77023 5.6663 1.5 5.1827 1.5 4.66181V4.5" stroke="#6B7280" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
                <input className="border-0 p-2 outline-0" type="text" name="search" value={emailInput} onChange={(e) => setEmailInput(e.target.value?.toLowerCase())} autoComplete="on" placeholder="Enter your email"/>
            </div>
            <ButtonComponent className="flex items-center gap-2 z-10 justify-center">
                <span>Join</span>
                <span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.50045 10L0.769531 1.12451C7.38466 3.04617 13.5283 6.07601 18.9862 9.99974C13.5284 13.9235 7.38473 16.9535 0.769623 18.8752L3.50045 10ZM3.50045 10L11.0007 10" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </ButtonComponent>
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#21C963] to-transparent opacity-30 rounded-3xl"></div>
        </div>
    )
}