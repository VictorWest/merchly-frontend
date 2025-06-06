import { Position } from "@/data/positions";
import ButtonComponent from "./Button";
import Link from "next/link";

export default function AvailablePosition({position}: {position: Position}){
    return(
        <Link href={`/career/${position.id}`}>
            <div className="bg-white rounded-lg *:flex *:flex-col md:*:flex-row *:gap-4 md:*:gap-10 p-10 space-y-5 text-sm md:text-base">
                <div>
                    <h3 className="md:w-1/3 text-xl md:text-2xl font-extrabold hover:text-[#21C963]">{position.title}</h3>
                    <div className="md:w-2/3 flex justify-between items-center">
                        <p className="font-bold">Due to {position.dueDate}</p>
                        <ButtonComponent className="flex gap-3 items-center w-fit" bg="#2A2A2D" textColour="white">
                            <span className="hidden md:block">Apply</span>
                            <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.75 15L15.75 12M15.75 12L12.75 9M15.75 12L8.25 12M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
                        </ButtonComponent>
                    </div>
                </div>
                <div>
                    <div className="md:w-1/3 flex flex-wrap gap-1 md:gap-5 text-xs md:text-sm">
                        {position.keywords?.map((item) => (
                            <div key={item} className="bg-[#F4F4F5] p-2 md:rounded-md">{item}</div>
                        ))}
                    </div>
                    <div className="md:w-2/3 text-sm md:text-base">
                        {position.description}
                    </div>
                </div>
            </div>        
        </Link>

    )
}