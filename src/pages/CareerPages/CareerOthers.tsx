"use client"
import AvailablePosition from "@/components/AvailablePosition"
import { availablePositions, Position } from "@/data/positions"
import { useEffect, useState } from "react"

export default function CareerOthers({careerData}:{careerData:Position}){
    const [ availablePositionList,setAvailablePositionList ] = useState([...availablePositions.filter((item)=>item.id !== careerData.id)])
    const [ searchInput, setSearchInput ] = useState<string>("")

    const handleSearchChange = () => {
        setAvailablePositionList(() => [...availablePositions.filter((item)=>item.id !== careerData.id)].filter((item) => {
            return (item.title.toLowerCase().includes(searchInput) || item.keywords?.some(keyword => keyword.toLowerCase() === searchInput))
        }))
    }

    useEffect(() => { handleSearchChange() }, [searchInput])
    return(
        <div className="bg-[#F4F4F5] p-20 text-black">
            <h2 className="text-3xl font-extrabold pb-10">Find Another Opportunity</h2>
            <div className="flex gap-5 justify-center mb-10">
                <div className="flex justify-between items-center border-1 border-stone-300 rounded-lg w-2/3 px-2 bg-white">
                    <input className="border-0 p-2 outline-0 w-full" type="text" name="search" value={searchInput} onChange={(e) => setSearchInput(e.target.value?.toLowerCase())} autoComplete="true" placeholder="Type something here"/>
                    <span onClick={handleSearchChange} className="cursor-pointer"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 1.5C3.51472 1.5 1.5 3.51472 1.5 6C1.5 8.48528 3.51472 10.5 6 10.5C7.24278 10.5 8.36709 9.99687 9.18198 9.18198C9.99687 8.36709 10.5 7.24278 10.5 6C10.5 3.51472 8.48528 1.5 6 1.5ZM0.5 6C0.5 2.96243 2.96243 0.5 6 0.5C9.03757 0.5 11.5 2.96243 11.5 6C11.5 7.33855 11.0213 8.56604 10.2266 9.51951L13.3536 12.6464C13.5488 12.8417 13.5488 13.1583 13.3536 13.3536C13.1583 13.5488 12.8417 13.5488 12.6464 13.3536L9.51951 10.2266C8.56604 11.0213 7.33855 11.5 6 11.5C2.96243 11.5 0.5 9.03757 0.5 6Z" fill="#7F7F81"/></svg></span>
                </div>   
                <div className="*:flex *:items-center *:bg-white *:p-2 *:rounded-md *:shadow-md *:text-sm *:gap-2 flex gap-5">
                    <div>
                        <p>Filter</p>
                        <span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.0001 2.5C12.2956 2.5 14.546 2.69337 16.7359 3.06472C17.1799 3.14002 17.5 3.52796 17.5 3.97835V4.84835C17.5 5.34563 17.3025 5.82254 16.9508 6.17417L12.4242 10.7008C12.0725 11.0525 11.875 11.5294 11.875 12.0267V14.4662C11.875 15.1764 11.4737 15.8256 10.8385 16.1432L8.125 17.5V12.0267C8.125 11.5294 7.92746 11.0525 7.57583 10.7008L3.04917 6.17417C2.69754 5.82254 2.5 5.34563 2.5 4.84835V3.97837C2.5 3.52798 2.82006 3.14004 3.26412 3.06474C5.45399 2.69338 7.70444 2.5 10.0001 2.5Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
                    </div>  
                    <div>
                        <p>Position</p>
                        <span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.875 11.7916V15.3333C16.875 16.2454 16.2193 17.0299 15.3151 17.15C13.5762 17.3808 11.802 17.5 10 17.5C8.19798 17.5 6.42378 17.3808 4.68487 17.15C3.78075 17.0299 3.125 16.2454 3.125 15.3333V11.7916M16.875 11.7916C17.2683 11.4564 17.5 10.9491 17.5 10.4074V7.25474C17.5 6.35396 16.8601 5.57568 15.9692 5.44238C15.0314 5.30206 14.0829 5.19429 13.125 5.12027M16.875 11.7916C16.7137 11.9291 16.5251 12.0377 16.3143 12.1078C14.3294 12.7677 12.2064 13.125 10 13.125C7.79357 13.125 5.67058 12.7677 3.68574 12.1078C3.47487 12.0377 3.28634 11.9291 3.125 11.7916M3.125 11.7916C2.73173 11.4563 2.5 10.9491 2.5 10.4074V7.25474C2.5 6.35396 3.13992 5.57568 4.03078 5.44238C4.96861 5.30206 5.91708 5.19429 6.875 5.12027M13.125 5.12027V4.375C13.125 3.33947 12.2855 2.5 11.25 2.5H8.75C7.71447 2.5 6.875 3.33947 6.875 4.375V5.12027M13.125 5.12027C12.0938 5.04058 11.0516 5 10 5C8.94836 5 7.9062 5.04058 6.875 5.12027M10 10.625H10.0062V10.6312H10V10.625Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>    
                    </div>  
                    <div>
                        <p>Date Range</p>
                        <span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.625 2.5V4.375M14.375 2.5V4.375M2.5 15.625V6.25C2.5 5.21447 3.33947 4.375 4.375 4.375H15.625C16.6605 4.375 17.5 5.21447 17.5 6.25V15.625M2.5 15.625C2.5 16.6605 3.33947 17.5 4.375 17.5H15.625C16.6605 17.5 17.5 16.6605 17.5 15.625M2.5 15.625V9.375C2.5 8.33947 3.33947 7.5 4.375 7.5H15.625C16.6605 7.5 17.5 8.33947 17.5 9.375V15.625" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
                    </div>
                </div>                 
            </div>

            <div className="flex flex-col gap-10">
                {availablePositionList.map((item) => (
                    <AvailablePosition key={item.title} position={item} />
                ))}
                {availablePositionList.length === 0 && <p className="">No available position</p>}
            </div>
        </div>            
    )
}