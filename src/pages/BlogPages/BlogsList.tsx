"use client"
import { BlogData, blogData, serviceLocations } from "@/data/data"
import { useEffect, useState } from "react"
import BlogCard from "./BlogCard"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export default function BlogsList() {
    const [ input, setInput ] = useState<string>("")
    const [ blogDataState, setBlogDataState ] = useState<BlogData[]>()
    const [ pageIndex, setPageIndex ] = useState(1)

    const BLOGS_PER_PAGE = 3
    const totalPages = (blogDataState?.length || BLOGS_PER_PAGE) / BLOGS_PER_PAGE

    const handleSearchChange = () => {
        setBlogDataState(() => [...blogData].filter((item) => {
            return (item.title.toLowerCase()).includes(input) || (item.author.toLowerCase()).includes(input)
        }))
    }
    
    useEffect(() => {
        handleSearchChange()
    }, [input])
    
    return (
        <div className="bg-white text-black px-20 py-10">
            <div className="flex justify-between">
                {/* Categories */}
                <div className="bg-[#F4F4F5] flex items-center gap-25 px-5 py-1 rounded-full w-2/3 *:font-semibold">
                    <p className="bg-white px-3 py-2 shadow-lg rounded-full">Agency Collection</p>
                    <p>Financial</p>
                    <p>Payment</p> 
                    <p>Tips</p>
                </div>           
                {/* Search */}
                <div className="flex items-center border-1 border-stone-700 rounded-lg w-fit px-2">
                    <input className="border-0 p-2 outline-0" type="text" name="search" value={input} onChange={(e) => setInput(e.target.value?.toLowerCase())} autoFocus autoComplete="true" placeholder="Type something here"/>
                    <span onClick={handleSearchChange} className="cursor-pointer"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 1.5C3.51472 1.5 1.5 3.51472 1.5 6C1.5 8.48528 3.51472 10.5 6 10.5C7.24278 10.5 8.36709 9.99687 9.18198 9.18198C9.99687 8.36709 10.5 7.24278 10.5 6C10.5 3.51472 8.48528 1.5 6 1.5ZM0.5 6C0.5 2.96243 2.96243 0.5 6 0.5C9.03757 0.5 11.5 2.96243 11.5 6C11.5 7.33855 11.0213 8.56604 10.2266 9.51951L13.3536 12.6464C13.5488 12.8417 13.5488 13.1583 13.3536 13.3536C13.1583 13.5488 12.8417 13.5488 12.6464 13.3536L9.51951 10.2266C8.56604 11.0213 7.33855 11.5 6 11.5C2.96243 11.5 0.5 9.03757 0.5 6Z" fill="#7F7F81"/></svg></span>
                </div>
            </div>
            <div className="mt-10 flex flex-wrap gap-10">
                {blogDataState?.slice((BLOGS_PER_PAGE * pageIndex) - BLOGS_PER_PAGE, BLOGS_PER_PAGE * pageIndex).map((item) => (
                    <BlogCard key={item.id} id={item.id} category={item.category} date={item.date} title={item.title} coverImage={item.coverImage} author={item.author} authorImage={item.authorImage} />
                ))}

                {blogDataState?.length == 0 && <p>No results found</p>}
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-3 items-center *:cursor-pointer my-10">
                <div onClick={() => setPageIndex(prev => prev !== 1 ? prev - 1 : BLOGS_PER_PAGE)} className="p-2 border border-gray-300 inset-ring-1 inset-ring-gray-400 rounded-lg bg-white text-xs">
                    <FaChevronLeft />
                </div>
                <div className="flex items-center justify-between gap-10 bg-[#F4F4F5] px-3 py-2 rounded-xl">
                    {Array.from({ length: Math.ceil(totalPages) }).map((_, idx) => (
                        <p key={idx + 1} onClick={() => setPageIndex(idx + 1)} className={`hover:text-[#21C963] ${pageIndex == (idx + 1) && 'self-start bg-white px-3 rounded-md border border-gray-300 inset-ring-1 inset-ring-gray-400'}`}>{idx + 1}</p>
                    ))}                    
                </div>
                <div onClick={() => setPageIndex(prev => prev !== BLOGS_PER_PAGE ? prev + 1 : 1)} className="p-2 border border-gray-300 inset-ring-1 inset-ring-gray-400 rounded-lg bg-white text-xs">
                    <FaChevronRight />
                </div>
            </div>
        </div>
    )
}


// .splice((BLOGS_PER_PAGE * pageIndex) - BLOGS_PER_PAGE, BLOGS_PER_PAGE * pageIndex)