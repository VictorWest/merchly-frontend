import ButtonComponent from "@/components/Button";
import InfoCard from "@/components/InfoCard";
import Image from "next/image";

export default function ServicesHero(){
    return(
        <div>
            <div className="pt-40 py-30 bg-[#2A2A2D] bg-[url('/grid.png')] bg-cover relative">
                <div className="flex h-full items-center gap-20 pl-20 pr-10"> 
                    <main className="text-start space-y-7 flex flex-col">
                        <h1 className="text-5xl font-extrabold ">Merchant Services</h1>
                        <p className="text-lg">Merchly Io provide you a simplified, enhanced, and personalized merchant services payment for you.</p>
                        <ButtonComponent className="w-fit text-sm">Get a free quote</ButtonComponent>
                    </main>
                    <Image src="/card.png" alt="Merchly Card" width={500} height={500} />
                </div>
                <div className="absolute top-0 bottom-0 right-0 w-1/3 bg-gradient-to-l from-[#21C963] to-transparent opacity-30"></div>
            </div>         
            <div className="bg-[#F4F4F5] text-black p-20 space-y-5">
                <p className="text-[#21C963] font-bold">Merchant Service Payment</p>
                <div className="flex justify-between">
                    <div className="text-3xl font-extrabold w-1/2">
                        <h3>We handle all the payment</h3>
                        <h3>You grow your business!</h3>
                    </div>
                    <p className="w-1/2">At Merchly Io, we're redefining the way small businesses handle transactions. Our Merchant Services are designed to simplify and enhance your payment processing experience, ensuring that your business thrives in today's dynamic market.</p>
                </div>
                <div className="flex gap-5 mt-15 items-center w-fit text-black *:bg-gradient-to-b *:from-white *:to-white *:border *:border-gray-300">
                    <InfoCard
                        svg={<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="24" fill="#279689"/><path d="M26 36.0001V26.0001C26 25.4478 26.4477 25.0001 27 25.0001H31C31.5523 25.0001 32 25.4478 32 26.0001V36.0001M26 36.0001H11.1478M26 36.0001H32M32 36.0001H36.8522M35 36.0001V20.4651M13 36.0001V20.4654M13 20.4654C14.5297 21.3496 16.5197 21.1373 17.8284 19.8286C17.8879 19.7691 17.9451 19.7082 18.0001 19.646C18.7331 20.4764 19.8054 21.0001 21 21.0001C22.1947 21.0001 23.2671 20.4763 24 19.6459C24.7329 20.4763 25.8053 21.0001 27 21.0001C28.1946 21.0001 29.2668 20.4764 29.9998 19.6462C30.0546 19.7083 30.1118 19.7691 30.1712 19.8285C31.48 21.1373 33.4702 21.3495 35 20.4651M13 20.4654C12.7038 20.2942 12.4249 20.082 12.1716 19.8286C10.6095 18.2665 10.6095 15.7338 12.1716 14.1717L13.7573 12.586C14.1324 12.211 14.6411 12.0002 15.1715 12.0002H32.8282C33.3587 12.0002 33.8674 12.211 34.2425 12.586L35.8281 14.1716C37.3902 15.7337 37.3902 18.2664 35.8281 19.8285C35.5748 20.0817 35.296 20.2939 35 20.4651M17 32.0001H22C22.5523 32.0001 23 31.5523 23 31.0001V26.0001C23 25.4478 22.5523 25.0001 22 25.0001H17C16.4477 25.0001 16 25.4478 16 26.0001V31.0001C16 31.5523 16.4477 32.0001 17 32.0001Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>}
                        header="Powering Merchant"
                        paragraph="At Merchly Io, we tailor Merchant Services to transform an enhanced and personalized payment processing facilities for small businesses."
                    />
                    <InfoCard
                        svg={<svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.333984" width="48" height="48" rx="24" fill="#279689"/><path d="M36.334 18L24.334 11L12.334 18M36.334 18L24.334 25M36.334 18V30L24.334 37M12.334 18L24.334 25M12.334 18V30L24.334 37M24.334 25V37" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>}
                        header="Simple Service Processing"
                        paragraph="Personalized consultation, easy setup, and support that fits your needs, so you can focus on growing business while we handle the payments."
                    />
                    <InfoCard
                        svg={<svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.666016" width="48" height="48" rx="24" fill="#279689"/><path d="M28.666 33.5034C29.7766 33.8267 30.951 34 32.166 34C34.1376 34 36.0027 33.5435 37.6612 32.7304C37.6644 32.654 37.666 32.5772 37.666 32.5C37.666 29.4624 35.2035 27 32.166 27C30.2752 27 28.6074 27.954 27.6174 29.4069M28.666 33.5034V33.5C28.666 32.0161 28.2858 30.6211 27.6174 29.4069M28.666 33.5034C28.666 33.5509 28.6656 33.5984 28.6648 33.6458C26.1825 35.1403 23.2746 36 20.166 36C17.0574 36 14.1495 35.1403 11.6672 33.6458C11.6664 33.5973 11.666 33.5487 11.666 33.5C11.666 28.8056 15.4716 25 20.166 25C23.3766 25 26.1714 26.78 27.6174 29.4069M24.666 16.5C24.666 18.9853 22.6513 21 20.166 21C17.6807 21 15.666 18.9853 15.666 16.5C15.666 14.0147 17.6807 12 20.166 12C22.6513 12 24.666 14.0147 24.666 16.5ZM35.666 19.5C35.666 21.433 34.099 23 32.166 23C30.233 23 28.666 21.433 28.666 19.5C28.666 17.567 30.233 16 32.166 16C34.099 16 35.666 17.567 35.666 19.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>}
                        header="Meaningful Relation Oriented"
                        paragraph="We build meaningful relationships with our clients by understanding each of their unique challenges and goals they face on their business."
                    />                
                </div>
            </div> 
        </div>
    )
}