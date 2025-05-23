import ButtonComponent from "@/components/Button";
import Image from "next/image";

export default function LandingHero(){
    return(
        <div className="pt-40 bg-[#2A2A2D]">
            <div className="relative pb-10"> 
                <main className="text-center space-y-7 flex flex-col justify-center bg-[url('/grid.png')] bg-cover">
                    <h1 className="text-4xl font-extrabold w-2/5 mx-auto">Simplified payment solution with customized experience</h1>
                    <p className="text-sm w-2/5 mx-auto">Revolutionizing payment processing for small businesses in the U.S with customized payment services & infrastructure according your business needs</p>
                    <div className="text-xs flex justify-center gap-3 *:flex *:w-fit *:items-center *:gap-1">
                        <p><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.75 18.75C8.21719 18.75 13.5136 19.4812 18.5468 20.8512C19.2738 21.0491 20 20.5086 20 19.7551V18.75M4.25 4.5V5.25C4.25 5.66421 3.91421 6 3.5 6H2.75M2.75 6V5.625C2.75 5.00368 3.25368 4.5 3.875 4.5H20.75M2.75 6V15M20.75 4.5V5.25C20.75 5.66421 21.0858 6 21.5 6H22.25M20.75 4.5H21.125C21.7463 4.5 22.25 5.00368 22.25 5.625V15.375C22.25 15.9963 21.7463 16.5 21.125 16.5H20.75M22.25 15H21.5C21.0858 15 20.75 15.3358 20.75 15.75V16.5M20.75 16.5H4.25M4.25 16.5H3.875C3.25368 16.5 2.75 15.9963 2.75 15.375V15M4.25 16.5V15.75C4.25 15.3358 3.91421 15 3.5 15H2.75M15.5 10.5C15.5 12.1569 14.1569 13.5 12.5 13.5C10.8431 13.5 9.5 12.1569 9.5 10.5C9.5 8.84315 10.8431 7.5 12.5 7.5C14.1569 7.5 15.5 8.84315 15.5 10.5ZM18.5 10.5H18.5075V10.5075H18.5V10.5ZM6.5 10.5H6.5075V10.5075H6.5V10.5Z" stroke="#3DDF7C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            <span>Customized Payment Experience</span></p>
                        <p><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 12.7498L11.75 14.9998L15.5 9.74985M12.5 2.71411C10.3495 4.75073 7.44563 5.99986 4.25 5.99986C4.19922 5.99986 4.14852 5.99955 4.09789 5.99892C3.7099 7.17903 3.5 8.43995 3.5 9.74991C3.5 15.3414 7.32432 20.0397 12.5 21.3719C17.6757 20.0397 21.5 15.3414 21.5 9.74991C21.5 8.43995 21.2901 7.17903 20.9021 5.99892C20.8515 5.99955 20.8008 5.99986 20.75 5.99986C17.5544 5.99986 14.6505 4.75073 12.5 2.71411Z" stroke="#3DDF7C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            <span>Enhanced Fraud Resistance</span></p>
                        <p><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9194 15.1694L17.75 21C18.7855 22.0355 20.4645 22.0355 21.5 21C22.5355 19.9645 22.5355 18.2855 21.5 17.25L15.6233 11.3733M11.9194 15.1694L14.4155 12.1383C14.7315 11.7546 15.1542 11.5132 15.6233 11.3733M11.9194 15.1694L7.26432 20.8219C6.78037 21.4096 6.05897 21.75 5.29768 21.75C3.89064 21.75 2.75 20.6094 2.75 19.2023C2.75 18.441 3.09044 17.7196 3.6781 17.2357L10.5146 11.6056M15.6233 11.3733C16.1727 11.2094 16.7858 11.1848 17.3659 11.2338C17.4925 11.2445 17.6206 11.25 17.75 11.25C20.2353 11.25 22.25 9.23528 22.25 6.75C22.25 6.08973 22.1078 5.46268 21.8523 4.89779L18.5762 8.17397C17.4605 7.91785 16.5823 7.03963 16.3262 5.92397L19.6024 2.64774C19.0375 2.39223 18.4103 2.25 17.75 2.25C15.2647 2.25 13.25 4.26472 13.25 6.75C13.25 6.87938 13.2555 7.00749 13.2662 7.13411C13.3571 8.20956 13.1948 9.39841 12.3617 10.0845L12.2596 10.1686M10.5146 11.6056L6.40901 7.5H5L2.75 3.75L4.25 2.25L8 4.5V5.90901L12.2596 10.1686M10.5146 11.6056L12.2596 10.1686M18.875 18.375L16.25 15.75M5.36723 19.125H5.37473V19.1325H5.36723V19.125Z" stroke="#3DDF7C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            <span>Customized Infrastructure</span></p>
                    </div>
                    <ButtonComponent className="mx-auto">Get a free quote</ButtonComponent>
                </main>
                <section className="flex flex-col justify-center items-center mt-7">
                    <Image src="/cards.png" alt="Extended Logo" width={500} height={500}/>
                    <div className="flex gap-10 mt-7 *:flex *:flex-col *:items-center text-lg text-white z-10">
                        <p><span className="font-bold">$182M</span><span className="text-xs">In Processing Volume</span></p>
                        <p><span className="font-bold">1,000+</span><span className="text-xs">Merchants under management.</span></p>
                        <p><span className="font-bold">12+</span><span className="text-xs">Global team members.</span></p>
                    </div>
                </section>
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#21C963] to-transparent opacity-30"></div>
            </div>            
        </div>
    )
}