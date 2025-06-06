"use client"
import JoinNewsletter from "@/components/JoinNewsletter";
import ProgressBar from "@/components/ProgressBar";
import SocialMediaIcons from "@/components/SocialMediaIcons";
import { PositionDetails } from "@/data/positions";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

export default function CareerDetails({careerData} : {careerData: PositionDetails}){
    const [ tocDisplay, setTocDisplay ] = useState(true)

    return(
        <div className="bg-white text-black">
            <header className="bg-[#F4F4F5] px-20 text-black overflow-hidden py-3 h-15 flex gap-10 items-center">
                <div className="space-x-2"><span className="font-bold">Published on: </span><span>{careerData?.publishedDate}</span></div>
                <div className="space-x-2"><span className="font-bold">Due to: </span><span>{careerData?.dueDate}</span></div>
            </header> 
            <div className="flex gap-10 relative px-20 py-10">
                <div className="space-y-10 w-2/3 *:space-y-5">
                    <div>
                        <h3 className="text-2xl font-bold">Tags</h3>
                        <div className="flex gap-3 flex-wrap">
                            {careerData?.keywords?.map((item) => (
                                <p key={item} className="px-2 bg-[#F4F4F5] rounded-md">{item}</p>
                            ))}
                        </div>                        
                    </div>
                    <hr style={{backgroundColor: '#EAEAEA', border: 'none', height: '0.5px', width: '100%'}} className="my-10"/>
                    <div>
                        <h3 className="text-2xl font-bold">Responsibilities</h3>
                        <p>{careerData?.description}</p>                        
                    </div>
                    <hr style={{backgroundColor: '#EAEAEA', border: 'none', height: '0.5px', width: '100%'}} className="my-10"/>
                    <div>
                        <h3 className="text-2xl font-bold">Qualifications</h3>
                        <ul className="space-y-2 text-justify">
                            {careerData?.qualifications.map((item) => (
                                <li key={item}>• {item}</li>
                            ))}
                        </ul>                        
                    </div>
                </div>
                <nav className="sticky top-30 w-1/3 self-start mt-10 ">
                    {/* Table Of Contents */}
                    <div className="p-5 border border-[#dbdada] rounded-lg space-y-5">
                        <div className="flex justify-between items-center font-bold">
                            <p className="text-xl">Table of Contents</p> 
                            <div onClick={() => setTocDisplay(prev => !prev)} className="cursor-pointer transform transition-transform duration-150">{tocDisplay ? <FaChevronUp /> : <FaChevronDown />}</div>
                        </div>
                        {tocDisplay && <div className="space-y-5">
                            <p>• Responsibilities</p>
                            <p>• Qualifications</p>
                            <p>• Benefits</p>
                        </div>}
                        <div className="space-y-5">
                            {tocDisplay && <ProgressBar />}
                            <p className="font-bold text-xl mt-5">Share this blog</p>
                            <SocialMediaIcons fbUrl="#" igUrl="#" twitterUrl="#" linkUrl="#" />
                        </div>
                    </div>
                </nav>   
            </div>
            <div className="flex justify-end pb-20">
                <JoinNewsletter className="mx-20" />
            </div> 
        </div>
    )
}