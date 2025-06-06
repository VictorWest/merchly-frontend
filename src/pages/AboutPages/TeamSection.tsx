"use client"
import { getTeamMembers, Testimony } from "@/data/data"
import Image from "next/image"
import { useEffect, useState } from "react"
import { motion } from "motion/react"
import Link from "next/link"

export default function TeamSection(){
    const [ data, setData ] = useState<Testimony[]>([])

    useEffect(() => {
        const result = JSON.parse(getTeamMembers())
        setData(result)
    }, [])

    return(
        <div className="bg-[#F4F4F5] p-10 md:p-20 text-black">
            <h3 className="text-2xl md:text-3xl text-center md:text-start font-extrabold pb-5">Meet Our Reliable Team</h3>
            <p className="md:w-3/7 text-center md:text-start text-sm md:text-base">Our great team led Merchly Io into todays achievement, resulting our big success and customer satisfaction.</p>
            <div className="flex flex-wrap flex-col md:flex-row items-center justify-center gap-x-20 gap-y-10 mt-10">
                {data.length !== 0 && data.map((item, index) => (
                    <motion.div key={item.id} initial={{x:100}} whileInView={{x:0}} transition={{duration: .3*(index+1)}} className="flex flex-col md:flex-row gap-5 items-center text-center md:text-start">
                        <Image key={item.id} className="rounded-full" src={item.imageUrl} alt={item.name} width={100} height={100} />
                        <div className="flex flex-col">
                            <h3 className="text-xl font-extrabold">{item.name}</h3>
                            <p className="text-sm">{item.occupation}</p>
                        </div>
                    </motion.div>
                ))}
                <div className="flex flex-col md:flex-row gap-5 items-center text-center md:text-start">
                    <Image className="rounded-full" src="/team/user.png" alt="User" width={100} height={100} />
                    <div className="flex flex-col">
                        <h3 className="text-xl font-extrabold">You?</h3>
                        <Link href="/career" className="text-xs text-[#21C963]">Click here to find an opportunity!</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}