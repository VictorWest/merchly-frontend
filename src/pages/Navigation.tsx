import ButtonComponent from "@/components/Button"
import Image from "next/image"

export default function Navigation(){
    return (
        <div className="flex justify-between items-center bg-black p-5 fixed top-0 left-0 right-0 opacity-90 border-b-[0.5px] border-white z-15">
            <div className="flex space-x-2">
                <Image src="/logo.png" alt="Logo" width={30} height={30}/>
                <Image src="/logo-expanded.png" alt="Logo Extended" width={100} height={100}/> 
            </div>
            <div className="flex gap-3 text-[0.85rem] font-medium">
                <div>Home</div>
                <div>Industries</div>
                <div>Company</div>
                <div>Blog</div>
            </div>
            <ButtonComponent>Merchly Register</ButtonComponent>
        </div>
    )
}