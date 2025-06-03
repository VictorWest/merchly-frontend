"use client"
import AvailablePosition from "@/components/AvailablePosition";
import InfoCard from "@/components/InfoCard";
import SlideUp from "@/components/transitions/SlideUp";
import { availablePositions } from "@/data/positions";
import { useEffect, useState } from "react";
export default function CareerPositions(){
    const [ availablePositionList,setAvailablePositionList ] = useState([...availablePositions])
    const [ searchInput, setSearchInput ] = useState<string>("")

    const handleSearchChange = () => {
        setAvailablePositionList(() => [...availablePositions].filter((item) => {
            return (item.title.toLowerCase().includes(searchInput) || item.keywords?.some(keyword => keyword.toLowerCase() === searchInput))
        }))
    }

    useEffect(() => { handleSearchChange() }, [searchInput])

    return(
        <div className="text-black">
            <div className="bg-white p-20">
                <SlideUp inView>
                    <h2 className="text-3xl font-extrabold pb-10">Our Team Values</h2>
                    <div className="flex items-center gap-10 *:border *:border-gray-300 *:bg-gradient-to-b *:from-white *:to-white">
                        <InfoCard 
                            svg={<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="24" fill="#279689"/><path d="M26 36.0001V26.0001C26 25.4478 26.4477 25.0001 27 25.0001H31C31.5523 25.0001 32 25.4478 32 26.0001V36.0001M26 36.0001H11.1478M26 36.0001H32M32 36.0001H36.8522M35 36.0001V20.4651M13 36.0001V20.4654M13 20.4654C14.5297 21.3496 16.5197 21.1373 17.8284 19.8286C17.8879 19.7691 17.9451 19.7082 18.0001 19.646C18.7331 20.4764 19.8054 21.0001 21 21.0001C22.1947 21.0001 23.2671 20.4763 24 19.6459C24.7329 20.4763 25.8053 21.0001 27 21.0001C28.1946 21.0001 29.2668 20.4764 29.9998 19.6462C30.0546 19.7083 30.1118 19.7691 30.1712 19.8285C31.48 21.1373 33.4702 21.3495 35 20.4651M13 20.4654C12.7038 20.2942 12.4249 20.082 12.1716 19.8286C10.6095 18.2665 10.6095 15.7338 12.1716 14.1717L13.7573 12.586C14.1324 12.211 14.6411 12.0002 15.1715 12.0002H32.8282C33.3587 12.0002 33.8674 12.211 34.2425 12.586L35.8281 14.1716C37.3902 15.7337 37.3902 18.2664 35.8281 19.8285C35.5748 20.0817 35.296 20.2939 35 20.4651M17 32.0001H22C22.5523 32.0001 23 31.5523 23 31.0001V26.0001C23 25.4478 22.5523 25.0001 22 25.0001H17C16.4477 25.0001 16 25.4478 16 26.0001V31.0001C16 31.5523 16.4477 32.0001 17 32.0001Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>}
                            header="Flexibility" paragraph="We let our employee create their own best workspace experience with remote-first approach."
                        />
                        <InfoCard 
                            svg={<svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.333984" width="48" height="48" rx="24" fill="#279689"/><path d="M36.334 18L24.334 11L12.334 18M36.334 18L24.334 25M36.334 18V30L24.334 37M12.334 18L24.334 25M12.334 18V30L24.334 37M24.334 25V37" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>}
                            header="Creativity" paragraph="With provided flexibility, we also let our employee growing their imagination and ideas as leverages of their creativity."
                        />
                        <InfoCard 
                            svg={<svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.666016" width="48" height="48" rx="24" fill="#279689"/><path d="M28.666 33.5034C29.7766 33.8267 30.951 34 32.166 34C34.1376 34 36.0027 33.5435 37.6612 32.7304C37.6644 32.654 37.666 32.5772 37.666 32.5C37.666 29.4624 35.2035 27 32.166 27C30.2752 27 28.6074 27.954 27.6174 29.4069M28.666 33.5034V33.5C28.666 32.0161 28.2858 30.6211 27.6174 29.4069M28.666 33.5034C28.666 33.5509 28.6656 33.5984 28.6648 33.6458C26.1825 35.1403 23.2746 36 20.166 36C17.0574 36 14.1495 35.1403 11.6672 33.6458C11.6664 33.5973 11.666 33.5487 11.666 33.5C11.666 28.8056 15.4716 25 20.166 25C23.3766 25 26.1714 26.78 27.6174 29.4069M24.666 16.5C24.666 18.9853 22.6513 21 20.166 21C17.6807 21 15.666 18.9853 15.666 16.5C15.666 14.0147 17.6807 12 20.166 12C22.6513 12 24.666 14.0147 24.666 16.5ZM35.666 19.5C35.666 21.433 34.099 23 32.166 23C30.233 23 28.666 21.433 28.666 19.5C28.666 17.567 30.233 16 32.166 16C34.099 16 35.666 17.567 35.666 19.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>}
                            header="Integrity" paragraph="Our employee diversity help us trust each other with honesty & transparency because we believe it will bring quality."
                        />                
                    </div>
                </SlideUp>
                </div>
            <div className="bg-[#F4F4F5] p-20">
                <h2 className="text-3xl font-extrabold pb-10">Available Positions</h2>
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
        </div>

    )
}