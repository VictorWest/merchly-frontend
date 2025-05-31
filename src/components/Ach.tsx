import Image from "next/image";
import ButtonComponent from "./Button";
import * as motion from "motion/react-client"

export default function AchComponent({imgUrl, svg, header, pargraph}: {imgUrl: string, svg: React.ReactNode, header: string, pargraph: string}){
    return(
        <motion.div initial={{scale:0.8}} whileInView={{scale:1}} transition={{type:'tween', duration:.5}} className="flex gap-10 justify-between items-center text-black px-20 pb-25">
            <Image src={imgUrl} alt="Ach" width={500} height={500} className="w-full"/>
            <div className="flex flex-col gap-5">
                <span>{svg}</span>
                <h1 className="font-extrabold">{header}</h1>
                <p className="pr-10">{pargraph}</p>
                <ButtonComponent className="mr-auto" bg="#2A2A2D" textColour="white">Get a free quote</ButtonComponent>
            </div>
        </motion.div>
    )
}