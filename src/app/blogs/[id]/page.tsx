"use client"
import Hero from "@/components/Hero"
import { blogData, BlogData } from "@/data/data"
import BlogDetails from "@/pages/BlogPages/BlogDetails"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function BlogPage(){
    const params = useParams()
    const [blogDataState, setBlogDataState] = useState<BlogData[]>()

    const handleBlogDataState = () => {
        setBlogDataState(() => [...blogData].filter((item) => {
            return item.id == params?.id
        }))
    }

    useEffect(() => {
        handleBlogDataState()
    }, [blogData])

    return(
        <div>
            {blogDataState?.length == 1 ? 
                <div>
                    <Hero header={blogDataState[0].title} paragraph="" blogPost></Hero>
                    <BlogDetails blogDataProp={blogDataState[0]}/>
                </div>
            : <p>No results</p>}
        </div>
    )
}