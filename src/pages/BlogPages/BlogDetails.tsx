"use client"
import { blogData, BlogData } from "@/data/data"
import Image from "next/image"
import ReactMarkdown from "react-markdown"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"
import ProgressBar from "@/components/ProgressBar";
import SocialMediaIcons from "@/components/SocialMediaIcons";
import { useState } from "react";
import Link from "next/link"
import AboutWriter from "./AboutWriter"
import JoinNewsletter from "@/components/JoinNewsletter"

export default function BlogDetails({blogDataProp} : {blogDataProp: BlogData}){
    const paragraphs = blogDataProp?.content?.split(/(?<=[.?!])\s+(?=[A-Z])/); // sentence split
    const [ tocDisplay, setTocDisplay ] = useState(true)

    return(
        <div className="bg-white text-black">
            <header className="bg-[#F4F4F5] md:px-20 text-black md:overflow-hidden py-5 md:py-3 md:h-15 flex flex-col md:flex-row gap-3 md:gap-10 items-center">
                <div className="md:space-x-2 text-sm md:text-base"><span className="font-bold">Published on: </span><span>{blogDataProp?.date}</span></div>
                <div className="md:space-x-2 text-sm md:text-base"><span className="font-bold">Category: </span><span>{blogDataProp?.category}</span></div>
            </header>      
            {blogDataProp?.content !== "" ? <main className="md:px-20 py-10">
                {/* Article Author & Contributors */}
                <div className="flex flex-col md:flex-row text-center md:text-start justify-between mb-5 gap-5 md:gap-0">
                    <div className="space-y-3">
                        <p className="font-bold text-sm md:text-base">Written by:</p>
                        <div className="flex flex-col md:flex-row gap-3 items-center">
                            <Image src={blogDataProp?.authorImage} className="rounded-full" alt={blogDataProp?.author} width={50} height={50} />
                            <div>
                                <p className="font-bold">{blogDataProp?.author.split(" ")[0]}</p>
                                <p className="text-xs">{blogDataProp?.position || ''}</p>
                            </div>
                        </div>
                    </div>
                    {blogDataProp?.contributors &&<div className="mx-auto space-y-3">
                        <p className="font-bold text-sm md:text-base">Contributors:</p>
                        <div className="flex gap-5">
                            {blogDataProp?.contributors?.map((item) => (
                                <div key={item.name} className="flex flex-col items-center">
                                    <Image src={item.imageUrl} className="rounded-full" alt={item.name} width={50} height={50} />
                                    <p>{item.name}</p>                                
                                </div>
                            ))}                            
                        </div>
                    </div>}
                </div>

                <hr style={{backgroundColor: '#F4F4F5', border: 'none', height: '2px', width: '100%'}} />

                <div className="flex flex-col md:flex-row text-center md:text-start relative gap-10">
                    {/* Main article */}
                    <article className="prose lg:prose-lg md:prose-lg text-black md:max-w-2/3 text-justify">
                        <div className="md:w-5/6 h-64 relative mb-10">
                            <Image className="object-cover md:rounded-xl" src={blogDataProp?.coverImage} alt={blogDataProp?.title} fill priority />
                        </div>
                        {paragraphs?.map((item, idx) => (
                                <div key={idx} className="px-10 md:px-0"><ReactMarkdown key={idx}>{item}</ReactMarkdown></div>
                            ))}
                    </article>
                    <nav className="md:sticky md:top-30 md:max-w-1/3 self-start mt-10 px-10 md:px-0">
                        {/* Table Of Contents */}
                        <div className="p-5 border border-[#dbdada] rounded-lg space-y-5">
                            <div className="flex justify-between items-center font-bold">
                               <p className="text-xl">Table of Contents</p> 
                               <div onClick={() => setTocDisplay(prev => !prev)} className="cursor-pointer transform transition-transform duration-150">{tocDisplay ? <FaChevronUp /> : <FaChevronDown />}</div>
                            </div>
                            {tocDisplay && <div className="space-y-5">
                                {blogDataProp?.tableOfContent?.map((item, index) => (
                                    <p key={index}>{index + 1}. {item}</p>
                                ))}
                            </div>}
                            <div className="space-y-5">
                                {tocDisplay && <ProgressBar />}
                                <p className="font-bold text-xl mt-5">Share this blog</p>
                                <SocialMediaIcons fbUrl="#" igUrl="#" twitterUrl="#" linkUrl="#" />
                            </div>
                        </div>
                    </nav>                    
                </div>
            </main>
                :
                <main className="w-full p-20 flex justify-center text-xl font-bold">Content not available right now</main>
            }  
            <div className="hidden md:block"><AboutWriter authorName={blogDataProp?.author} /></div>
            <div className="flex flex-col md:flex-row justify-center gap-20 items-center py-10 px-10 md:px-0">
                {/* Call to join newsletter */}
                <JoinNewsletter />
                {/* Related Posts */}
                <div className="space-y-3">
                    <h3 className="text-base md:text-xl font-bold">Related Posts: </h3>
                    <div className="space-y-7">
                        {[...blogData].filter((item) => (item.category == blogDataProp?.category && item.title !== blogDataProp?.title)).slice(0, 4).map((item) => (
                            <Link href={`/blogs/${item.id}`} key={item.id} className="space-y-3 w-4/5">
                                <p className="text-black text-sm md:text-lg space-x-2 hover:text-[#21C963]"> → {item.title}</p>
                                <hr style={{backgroundColor: 'black', border: 'none', height: '0.5px', width: '100%'}}/>
                            </Link>
                        ))}                        
                    </div>
                </div>                
            </div>

        </div>
    )
}