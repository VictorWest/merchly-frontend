import InfoCard from "@/components/InfoCard";
import Image from "next/image";
import * as motion from "motion/react-client"
import TypingEffect from "@/components/transitions/TypingEffect";
import SlideUp from "@/components/transitions/SlideUp";
export default function ServicesPriority(){
    return(
        <div>
            <div className="w-full relative p-10 md:p-20 space-y-10 text-center rounded-lg bg-black border border-gray-800 overflow-hidden bg-[url('/grid.png')] bg-contain">
                <Image src='/logo-expanded.png' alt="logo" width={100} height={100} className="mx-auto" />
                <h2 className="text-2xl md:text-3xl font-extrabold"><TypingEffect text="Your Financial Goals are Our Priority."/><motion.span  animate={{ opacity: [0, 1] }}  transition={{ repeat: Infinity, duration: 0.6 }}  className="inline-block">  |</motion.span></h2>
                <p className="md:w-1/2 mx-auto text-sm md:text-base">At Merchly Io, our merchant services provice the tools and support your business needs to accept payments when running your business.</p>
                <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-10 *:bg-gradient-to-b *:from-[#28DC6E66]/70 *:to-[#28DC6E66]/100 *:rounded-md *:flex *:justify-center md:*:justify-start *:items-center *:w-full text-sm font-bold">
                    <div>
                        <span><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28 23L24 19M24 19L20 23M24 19L24 29M36 24C36 30.6274 30.6274 36 24 36C17.3726 36 12 30.6274 12 24C12 17.3726 17.3726 12 24 12C30.6274 12 36 17.3726 36 24Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                        <h3 className="md:pr-20">Enhanced for you</h3>
                    </div>   
                    <div>
                        <span><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 25L23 28L28 21M36 24C36 30.6274 30.6274 36 24 36C17.3726 36 12 30.6274 12 24C12 17.3726 17.3726 12 24 12C30.6274 12 36 17.3726 36 24Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                        <h3 className="md:pr-20">Simplified for you</h3>
                    </div>        
                    <div>
                        <span><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31.9754 32.9664C30.1495 30.5566 27.2565 29 24 29C20.7435 29 17.8505 30.5566 16.0246 32.9664M31.9754 32.9664C34.4447 30.7685 36 27.5659 36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 27.5659 13.5553 30.7685 16.0246 32.9664M31.9754 32.9664C29.8553 34.8535 27.0616 36 24 36C20.9384 36 18.1447 34.8535 16.0246 32.9664M28 21C28 23.2091 26.2091 25 24 25C21.7909 25 20 23.2091 20 21C20 18.7909 21.7909 17 24 17C26.2091 17 28 18.7909 28 21Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                        <h3 className="md:pr-20">Personalized for you</h3>
                    </div>           
                </div>

                {/* Glowing edge - Top Right */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#3DDF7C] to-transparent opacity-70 blur-[80px]"></div>

                {/* Glowing edge - Bottom Left */}
                <div className="absolute bottom-0 left-0 w-32 h-64 bg-gradient-to-tl from-[#3DDF7C] to-transparent opacity-70 blur-[80px]"></div>
            </div>     
            <div className="bg-[#F4F4F5] p-10 md:p-20 text-black space-y-4 flex flex-col md:flex-row justify-between text-center md:text-start">
                <div className="md:w-1/2 space-y-5 md:sticky md:top-30 self-start">
                    <p className="text-[#21C963] text-lg md:text-base font-extrabold">Merchant Service Payment</p>
                    <div className="text-xl md:text-3xl font-extrabold">
                        <h3>We handle all the payment</h3>
                        <h3>You grow your business!</h3>
                    </div>        
                    <ul className="*:flex *:flex-col *:md:flex-row *:items-center *:gap-3 *:font-bold space-y-5 text-xs md:text-base mb-10 md:mb-0">
                        <li>
                            <span><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 17L15 20L20 13M28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z" stroke="#21C963" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                            <p>Tailored for Startups and Growing Businesses</p>
                        </li>
                        <li>
                            <span><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 17L15 20L20 13M28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z" stroke="#21C963" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                            <p>Robust & Scalable Payment Tools</p>
                        </li>
                        <li>
                            <span><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 17L15 20L20 13M28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z" stroke="#21C963" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                            <p>Serious Security, Zero Hidden Fees</p>
                        </li>
                    </ul>            
                </div>
                <div className="md:w-1/2 flex flex-col text-start gap-10 *:bg-gradient-to-b *:from-white *:to-white *:border *:border-gray-300 *:shadow-lg">
                    <InfoCard
                        svg={<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="24" fill="#279689"/><path d="M26 36.0001V26.0001C26 25.4478 26.4477 25.0001 27 25.0001H31C31.5523 25.0001 32 25.4478 32 26.0001V36.0001M26 36.0001H11.1478M26 36.0001H32M32 36.0001H36.8522M35 36.0001V20.4651M13 36.0001V20.4654M13 20.4654C14.5297 21.3496 16.5197 21.1373 17.8284 19.8286C17.8879 19.7691 17.9451 19.7082 18.0001 19.646C18.7331 20.4764 19.8054 21.0001 21 21.0001C22.1947 21.0001 23.2671 20.4763 24 19.6459C24.7329 20.4763 25.8053 21.0001 27 21.0001C28.1946 21.0001 29.2668 20.4764 29.9998 19.6462C30.0546 19.7083 30.1118 19.7691 30.1712 19.8285C31.48 21.1373 33.4702 21.3495 35 20.4651M13 20.4654C12.7038 20.2942 12.4249 20.082 12.1716 19.8286C10.6095 18.2665 10.6095 15.7338 12.1716 14.1717L13.7573 12.586C14.1324 12.211 14.6411 12.0002 15.1715 12.0002H32.8282C33.3587 12.0002 33.8674 12.211 34.2425 12.586L35.8281 14.1716C37.3902 15.7337 37.3902 18.2664 35.8281 19.8285C35.5748 20.0817 35.296 20.2939 35 20.4651M17 32.0001H22C22.5523 32.0001 23 31.5523 23 31.0001V26.0001C23 25.4478 22.5523 25.0001 22 25.0001H17C16.4477 25.0001 16 25.4478 16 26.0001V31.0001C16 31.5523 16.4477 32.0001 17 32.0001Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                        header="Startup-Choice Solutions"
                        className="flex from-white via-[#28DC6E66]/70 to-[#28DC6E66]/40"
                    >
                        <li>Tailored services to help new businesses grow</li>
                        <li>Flexible pricing plans</li>
                        <li>Dedicated onboarding and ongoing support</li>
                    </InfoCard>
                    <InfoCard
                        svg={<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="24" fill="#279689"/><path d="M36 18L24 11L12 18M36 18L24 25M36 18V30L24 37M12 18L24 25M12 18V30L24 37M24 25V37" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                        header="Advanced Security"
                    >
                        <li>End-to-end encryption and tokenization</li>
                        <li>PCI-DSS compliance</li>
                        <li>Real-time fraud detection</li>
                    </InfoCard>
                    <InfoCard
                        svg={<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="24" fill="#279689"/><path d="M28 33.5034C29.1106 33.8267 30.285 34 31.4999 34C33.4716 34 35.3367 33.5435 36.9952 32.7304C36.9983 32.654 36.9999 32.5772 36.9999 32.5C36.9999 29.4624 34.5375 27 31.4999 27C29.6092 27 27.9414 27.954 26.9514 29.4069M28 33.5034V33.5C28 32.0161 27.6198 30.6211 26.9514 29.4069M28 33.5034C28 33.5509 27.9996 33.5984 27.9988 33.6458C25.5165 35.1403 22.6086 36 19.5 36C16.3914 36 13.4835 35.1403 11.0012 33.6458C11.0004 33.5973 11 33.5487 11 33.5C11 28.8056 14.8056 25 19.5 25C22.7106 25 25.5054 26.78 26.9514 29.4069M24 16.5C24 18.9853 21.9853 21 19.5 21C17.0147 21 15 18.9853 15 16.5C15 14.0147 17.0147 12 19.5 12C21.9853 12 24 14.0147 24 16.5ZM35 19.5C35 21.433 33.433 23 31.5 23C29.567 23 28 21.433 28 19.5C28 17.567 29.567 16 31.5 16C33.433 16 35 17.567 35 19.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                        header="Robust and Flexible Integrations"
                    >
                        <li>Easily connects with various business systems</li>
                        <li>Fits smoothly into existing workflows</li>
                    </InfoCard>
                    <InfoCard
                        svg={<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="24" fill="#279689"/><path d="M28 33.5034C29.1106 33.8267 30.285 34 31.4999 34C33.4716 34 35.3367 33.5435 36.9952 32.7304C36.9983 32.654 36.9999 32.5772 36.9999 32.5C36.9999 29.4624 34.5375 27 31.4999 27C29.6092 27 27.9414 27.954 26.9514 29.4069M28 33.5034V33.5C28 32.0161 27.6198 30.6211 26.9514 29.4069M28 33.5034C28 33.5509 27.9996 33.5984 27.9988 33.6458C25.5165 35.1403 22.6086 36 19.5 36C16.3914 36 13.4835 35.1403 11.0012 33.6458C11.0004 33.5973 11 33.5487 11 33.5C11 28.8056 14.8056 25 19.5 25C22.7106 25 25.5054 26.78 26.9514 29.4069M24 16.5C24 18.9853 21.9853 21 19.5 21C17.0147 21 15 18.9853 15 16.5C15 14.0147 17.0147 12 19.5 12C21.9853 12 24 14.0147 24 16.5ZM35 19.5C35 21.433 33.433 23 31.5 23C29.567 23 28 21.433 28 19.5C28 17.567 29.567 16 31.5 16C33.433 16 35 17.567 35 19.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                        header="Transparent Pricing"
                    >
                        <li>No hidden fees</li>
                        <li>Clear, competitive plans for businesses</li>
                    </InfoCard>
                    <InfoCard
                        svg={<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="24" fill="#279689"/><path d="M28 33.5034C29.1106 33.8267 30.285 34 31.4999 34C33.4716 34 35.3367 33.5435 36.9952 32.7304C36.9983 32.654 36.9999 32.5772 36.9999 32.5C36.9999 29.4624 34.5375 27 31.4999 27C29.6092 27 27.9414 27.954 26.9514 29.4069M28 33.5034V33.5C28 32.0161 27.6198 30.6211 26.9514 29.4069M28 33.5034C28 33.5509 27.9996 33.5984 27.9988 33.6458C25.5165 35.1403 22.6086 36 19.5 36C16.3914 36 13.4835 35.1403 11.0012 33.6458C11.0004 33.5973 11 33.5487 11 33.5C11 28.8056 14.8056 25 19.5 25C22.7106 25 25.5054 26.78 26.9514 29.4069M24 16.5C24 18.9853 21.9853 21 19.5 21C17.0147 21 15 18.9853 15 16.5C15 14.0147 17.0147 12 19.5 12C21.9853 12 24 14.0147 24 16.5ZM35 19.5C35 21.433 33.433 23 31.5 23C29.567 23 28 21.433 28 19.5C28 17.567 29.567 16 31.5 16C33.433 16 35 17.567 35 19.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                        header="Real Support from Real People"
                    >
                        <li>Responsive, knowledgeable team</li>
                        <li>Ongoing assistance to help you maximize the platform's value</li>
                    </InfoCard>
                </div>
            </div>       
        </div>

    )
}