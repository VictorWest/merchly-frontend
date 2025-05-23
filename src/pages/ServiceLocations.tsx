import ButtonComponent from "@/components/Button";
import { serviceLocations } from "@/data/data";
import Image from "next/image";

export default function ServiceLocations(){
    return(
        <div className="bg-white p-20 text-black">
            <h3 className="text-3xl font-extrabold pb-5">Our Services Locations</h3>
            <div className="flex justify-between">
                <p className="w-3/7">One company covering multiple partnership areas across the United States.</p>
                <ButtonComponent bg="#19191A" textColour="white" className="flex items-center gap-3 w-fit inset-shadow-sm inset-shadow-white/100">
                    <span>Contact Us </span>
                    <span><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.25 6.97217C2.25 15.2564 8.96573 21.9722 17.25 21.9722H19.5C20.7426 21.9722 21.75 20.9648 21.75 19.7222V18.3505C21.75 17.8343 21.3987 17.3843 20.8979 17.2591L16.4747 16.1533C16.0355 16.0436 15.5734 16.2076 15.3018 16.5697L14.3316 17.8634C14.05 18.2388 13.563 18.4048 13.1223 18.2434C9.81539 17.032 7.19015 14.4068 5.97876 11.0998C5.81734 10.6592 5.98336 10.1721 6.3588 9.89057L7.65242 8.92035C8.01453 8.64877 8.17861 8.18662 8.06883 7.7475L6.96304 3.32432C6.83783 2.8235 6.38785 2.47217 5.87163 2.47217H4.5C3.25736 2.47217 2.25 3.47953 2.25 4.72217V6.97217Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
                </ButtonComponent>
            </div>                
            <div className="mt-10 flex items-center justify-between">
                <div className="">
                    <div className="bg-[#F4F4F5] flex items-center gap-10 px-5 py-1 rounded-full w-fit">
                        <p className="bg-white px-3 py-2 shadow-lg rounded-full">Northeast</p>
                        <p>Midwest</p>
                        <p>South</p> 
                        <p>West</p>
                    </div>
                    <ul className="flex flex-col flex-wrap h-40 mt-10">
                        {serviceLocations.map((state) => (
                            <li key={state} className="font-bold border-l-2 border-stone-500 py-1 px-2">{state}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <Image src={"/map.png"} alt="US MAP" width={500} height={500} />
                </div>
            </div>
        </div>
    )
}