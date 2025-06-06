import ButtonComponent from "@/components/Button";
import SocialMediaIcons from "@/components/SocialMediaIcons";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import * as motion from "motion/react-client"

export default function Footer(){
    return(
        <footer style={{background: "radial-gradient(ellipse at bottom, #0B5029, #08311A, #04100C, #000)"}} className="relative group p-10 md:p-20 pb-10 text-white bg-black overflow-hidden">
            <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="flex flex-col gap-5 text-center md:text-start">
                    <p className="text-green-500">Get in touch</p>
                    <h1 className="font-extrabold text-2xl md:text-4xl md:w-2/3">Get a Personalized Payment Process now!</h1>
                    <p className="md:pr-15 md:w-2/3">Let&apos;s add value and develop your business with our accessible payment process service solutions.</p>
                </div>
                <div className="space-y-3">
                    <ButtonComponent className="flex items-center justify-center gap-2">
                        <p className="text-xs md:text-base">Book a call </p>
                        <motion.span
                            animate={{
                                rotate: [0, -15, 15, -10, 10, -5, 5, 0]
                            }}
                            transition={{repeat: Infinity, duration:1, ease:'easeInOut'}}
                        ><MdOutlinePhoneInTalk/></motion.span>
                    </ButtonComponent>
                    <ButtonComponent className="flex items-center justify-center gap-2 border border-[#21C963]" bg="transparent" textColour="#21C963">
                        <p className="text-xs md:text-base">Send an email</p>
                        <svg width="20" height="20" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.25 6.75V17.25C22.25 18.4926 21.2426 19.5 20 19.5H5C3.75736 19.5 2.75 18.4926 2.75 17.25V6.75M22.25 6.75C22.25 5.50736 21.2426 4.5 20 4.5H5C3.75736 4.5 2.75 5.50736 2.75 6.75M22.25 6.75V6.99271C22.25 7.77405 21.8447 8.49945 21.1792 8.90894L13.6792 13.5243C12.9561 13.9694 12.0439 13.9694 11.3208 13.5243L3.82078 8.90894C3.15535 8.49945 2.75 7.77405 2.75 6.99271V6.75" stroke="#3DDF7C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </ButtonComponent>
                </div>                
            </div>
            <hr style={{backgroundColor: 'white', border: 'none', height: '0.5px', width: '100%'}} className="my-10"/>
            <div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-between">
                <div className="space-y-5 text-center md:text-start">
                    <h3 className="text-2xl font-extrabold">Merchly</h3>
                    <p>Accessible Payment Services for Everyone</p>
                    <div className="flex justify-center md:block"><SocialMediaIcons fbUrl="#" igUrl="#" twitterUrl="#" linkUrl="#" /></div>
                </div>
                <div className="flex flex-col md:flex-row gap-10 text-xs md:text-sm text-center md:text-start">
                    <div className="space-y-5">
                        <h3 className="text-base md:text-xl font-extrabold">Industries We Serve</h3>
                        <ul className="font-[100] md:space-y-3">
                            <li>Law Firms</li>
                            <li>Book Keeper</li>
                            <li>E-Commerce</li>
                            <li>Startup Merchant Account</li>
                        </ul>
                    </div>
                    <div className="space-y-5">
                        <h3 className="text-base md:text-xl font-extrabold">Payment Solution</h3>
                        <ul className="font-[100] md:space-y-3">
                            <li>Credit Card Processing</li>
                            <li>ACH Payment</li>
                            <li>Reccurement Payment Processing</li>
                            <li>Payment Infrastructure</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr style={{backgroundColor: 'white', border: 'none', height: '0.5px', width: '100%'}} className="my-10"/>
            <div className="flex flex-col md:flex-row text-center md:text-start md:justify-between text-sm md:text-base">
                <p>Copyright {(new Date).getFullYear()} merchly.io</p>
                <div className="flex flex-col md:flex-row md:gap-5">
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                    <p>Cookies</p>
                </div>
            </div>
        </footer>
    )
}