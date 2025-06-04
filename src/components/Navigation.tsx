"use client"
import ButtonComponent from "@/components/Button"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navigation(){
    const [ barClicked, setBarClicked ] = useState(false)
    return (
        <div className="flex justify-between items-center px-10 bg-black py-5 md:px-20 fixed top-0 left-0 right-0 opacity-90 border-b-[0.5px] border-white z-15">
            <Link href="/home" className="flex space-x-2">
                <Image src="/logo.png" alt="Logo" width={30} height={30}/>
                <Image src="/logo-expanded.png" alt="Logo Extended" width={100} height={100}/> 
            </Link>
            <div className="text-3xl md:hidden text-[#21C963] cursor-pointer relative" onClick={() => setBarClicked(prev=>!prev)}><GiHamburgerMenu/></div>
            <div className={`${barClicked ? 'flex flex-col' : 'hidden'} absolute left-0 top-15 p-5 shadow-2xl w-full *:p-1 bg-[#21C963] *:hover:bg-[#365d46] md:bg-transparent md:flex md:flex-row md:relative md:shadow-[0] gap-3 text-[0.85rem] font-medium cursor-pointer *:md:hover:text-[#21C963]`}>
                <Link href='/home'>Home</Link>
                <Link href='/about'>Industries</Link>
                <Link href='/services'>Company</Link>
                <Link href='/blogs'>Blog</Link>
                <ButtonComponent className={`${barClicked ? 'block' : 'hidden'} w-fit p-3`} bg="black" textColour="white">Merchly Register</ButtonComponent>
            </div>
            <ButtonComponent className="hidden md:block">Merchly Register</ButtonComponent>
        </div>
    )
}