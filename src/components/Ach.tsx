import Image from "next/image";
import ButtonComponent from "./Button";
import * as motion from "motion/react-client"

export default function AchComponent({imgUrl, svg, header, pargraph}: {imgUrl: string, svg: React.ReactNode, header: string, pargraph: string}){
    return(
        <motion.div initial={{scale:0.9}} whileInView={{scale:1}} transition={{duration:1}} className="flex flex-col md:flex-row gap-10 justify-between items-center text-black px-20 md:pb-25">
            <Image src={imgUrl} alt="Ach" width={500} height={500} className="w-full hidden md:block"/>
            <div className="flex flex-col gap-5 items-center text-center md:items-start md:text-start">
                <span>{svg}</span>
                <h1 className="font-extrabold w-fit">{header}</h1>
                <p className="md:pr-10">{pargraph}</p>
                <ButtonComponent className="md:mr-auto" bg="#2A2A2D" textColour="white">Get a free quote</ButtonComponent>
            </div>
        </motion.div>
    )
}