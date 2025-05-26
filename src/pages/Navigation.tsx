import ButtonComponent from "@/components/Button"
import Image from "next/image"
import Link from "next/link"

export default function Navigation(){
    return (
        <div className="flex justify-between items-center bg-black p-5 fixed top-0 left-0 right-0 opacity-90 border-b-[0.5px] border-white z-15">
            <Link href="/home" className="flex space-x-2">
                <Image src="/logo.png" alt="Logo" width={30} height={30}/>
                <Image src="/logo-expanded.png" alt="Logo Extended" width={100} height={100}/> 
            </Link>
            <div className="flex gap-3 text-[0.85rem] font-medium cursor-pointer *:hover:text-[#21C963]">
                <Link href='/home'>Home</Link>
                <Link href='/about'>Industries</Link>
                <div>Company</div>
                <Link href='/blogs'>Blog</Link>
            </div>
            <ButtonComponent>Merchly Register</ButtonComponent>
        </div>
    )
}