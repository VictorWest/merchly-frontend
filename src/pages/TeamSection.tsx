"use client"
import { getTeamMembers, Testimony } from "@/data/data"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function TeamSection(){
    const [ data, setData ] = useState<Testimony[]>([])

    useEffect(() => {
        const result = JSON.parse(getTeamMembers())
        setData(result)
    }, [])

    return(
        <div className="bg-[#F4F4F5] p-20 text-black">
            <h3 className="text-3xl font-extrabold pb-5">Meet Our Reliable Team</h3>
            <p className="w-3/7">Our great team led Merchly Io into todays achievement, resulting our big success and customer satisfaction.</p>
            <div className="flex flex-wrap items-center justify-center gap-x-20 gap-y-10 mt-10">
                {data.length !== 0 && data.map((item) => (
                    <div className="flex gap-5 items-center">
                        <Image key={item.id} className="rounded-full" src={item.imageUrl} alt={item.name} width={100} height={100} />
                        <div className="flex flex-col">
                            <h3 className="text-xl font-extrabold">{item.name}</h3>
                            <p className="text-sm">{item.occupation}</p>
                        </div>
                    </div>
                ))}
                <div className="flex gap-5 items-center">
                    <Image className="rounded-full" src="/team/user.png" alt="User" width={100} height={100} />
                    <div className="flex flex-col">
                        <h3 className="text-xl font-extrabold">You?</h3>
                        <p className="text-xs text-[#21C963]">Click here to find an opportunity!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}