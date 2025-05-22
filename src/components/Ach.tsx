import Image from "next/image";
import ButtonComponent from "./Button";

export default function AchComponent({imgUrl, svg, header, pargraph}: {imgUrl: string, svg: React.ReactNode, header: string, pargraph: string}){
    return(
        <div className="flex gap-10 items-center text-black px-20 pb-25">
            <Image src={imgUrl} alt="Ach" width={500} height={500}/>
            <div className="flex flex-col gap-5">
                <span>{svg}</span>
                <h1 className="font-extrabold">{header}</h1>
                <p className="pr-10">{pargraph}</p>
                <ButtonComponent className="mr-auto" bg="#2A2A2D" textColour="white">Get a free quote</ButtonComponent>
            </div>
        </div>
    )
}