import ButtonComponent from "@/components/Button";
import SocialMediaIcons from "@/components/SocialMediaIcons";

export default function Footer(){
    return(
        <footer className="relative group p-20 pb-10 text-white bg-black overflow-hidden">
            <div className="flex gap-10 items-center">
                <div className="flex flex-col gap-5">
                    <p className="text-green-500">Get in touch</p>
                    <h1 className="font-extrabold text-4xl w-2/3">Get a Personalized Payment Process now!</h1>
                    <p className="pr-15 w-2/3">Let's add value and develop your business with our accessible payment process service solutions.</p>
                </div>
                <div className="space-y-3">
                    <ButtonComponent className="flex items-center justify-center gap-2">
                        <p>Book a call </p>
                        <svg width="15" height="15" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.25 5.75C1.25 14.0343 7.96573 20.75 16.25 20.75H18.5C19.7426 20.75 20.75 19.7426 20.75 18.5V17.1284C20.75 16.6121 20.3987 16.1622 19.8979 16.037L15.4747 14.9312C15.0355 14.8214 14.5734 14.9855 14.3018 15.3476L13.3316 16.6412C13.05 17.0166 12.563 17.1827 12.1223 17.0212C8.81539 15.8098 6.19015 13.1846 4.97876 9.87766C4.81734 9.43699 4.98336 8.94998 5.3588 8.6684L6.65242 7.69818C7.01453 7.4266 7.17861 6.96445 7.06883 6.52533L5.96304 2.10215C5.83783 1.60133 5.38785 1.25 4.87163 1.25H3.5C2.25736 1.25 1.25 2.25736 1.25 3.5V5.75Z" stroke="#19191A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </ButtonComponent>
                    <ButtonComponent className="flex items-center justify-center gap-2 border border-[#21C963]" bg="transparent" textColour="#21C963">
                        <p>Send an email</p>
                        <svg width="20" height="20" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.25 6.75V17.25C22.25 18.4926 21.2426 19.5 20 19.5H5C3.75736 19.5 2.75 18.4926 2.75 17.25V6.75M22.25 6.75C22.25 5.50736 21.2426 4.5 20 4.5H5C3.75736 4.5 2.75 5.50736 2.75 6.75M22.25 6.75V6.99271C22.25 7.77405 21.8447 8.49945 21.1792 8.90894L13.6792 13.5243C12.9561 13.9694 12.0439 13.9694 11.3208 13.5243L3.82078 8.90894C3.15535 8.49945 2.75 7.77405 2.75 6.99271V6.75" stroke="#3DDF7C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </ButtonComponent>
                </div>                
            </div>
            <hr style={{backgroundColor: 'white', border: 'none', height: '0.5px', width: '100%'}} className="my-10"/>
            <div className="flex justify-between">
                <div className="space-y-5">
                    <h3 className="text-2xl font-extrabold">Merchly</h3>
                    <p>Accessible Payment Services for Everyone</p>
                    <SocialMediaIcons fbUrl="#" igUrl="#" twitterUrl="#" linkUrl="#" />
                </div>
                <div className="flex gap-10 text-sm">
                    <div className="space-y-5">
                        <h3 className="text-xl font-extrabold">Industries We Serve</h3>
                        <ul className="font-[100] space-y-3">
                            <li>Law Firms</li>
                            <li>Book Keeper</li>
                            <li>E-Commerce</li>
                            <li>Startup Merchant Account</li>
                        </ul>
                    </div>
                    <div className="space-y-5">
                        <h3 className="text-xl font-extrabold">Payment Solution</h3>
                        <ul className="font-[100] space-y-3">
                            <li>Credit Card Processing</li>
                            <li>ACH Payment</li>
                            <li>Reccurement Payment Processing</li>
                            <li>Payment Infrastructure</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr style={{backgroundColor: 'white', border: 'none', height: '0.5px', width: '100%'}} className="my-10"/>
            <div className="flex justify-between">
                <p>Copyright {(new Date).getFullYear()} merchly.io</p>
                <div className="flex gap-5">
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                    <p>Cookies</p>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#3DDF7C] to-transparent opacity-20"></div>
        </footer>
    )
}