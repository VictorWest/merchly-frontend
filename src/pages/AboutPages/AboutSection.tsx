import Image from "next/image";
import * as motion from "motion/react-client"

export default function AboutSection(){
    return(
        <div className="bg-white p-20">
            <motion.div initial={{y:-100}} whileInView={{y:0}} transition={{duration: .3}} className="flex flex-col w-full items-center mx-auto">
                <Image src="/about-container.png" alt="Cafe" width={1000} height={1000} className="w-full rounded-t-4xl object-cover" />
                <div style={{background: "radial-gradient(ellipse at bottom, #08311A, #000)"}}  className="relative pb-10 bg-[#2A2A2D] w-full rounded-b-4xl"> 
                    <div className="text-center flex items-center justify-between p-10 bg-[url('/grid.png')] bg-cover">
                        <div className="text-start space-y-15">
                            <motion.h2 initial={{x:-300, opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:.5}} className="text-3xl font-extrabold">Why do we exist?</motion.h2>
                            <motion.div initial={{opacity:0, scaleY:3}} whileInView={{opacity:1, scaleY:1}} transition={{duration:.5}} className="bg-gradient-to-b from-[#28DC6E66]/70 to-[#28DC6E66]/40 rounded-2xl p-5 flex gap-5 items-center *:space-y-5">
                                <ul className="space-y-2">
                                    <li className="flex justify-between items-baseline gap-7">
                                        <span className="text-xl font-extrabold text-start">$182M</span>
                                        <span className="text-sm text-end">In Processing Volume</span>
                                    </li>
                                    <li className="flex justify-between items-baseline gap-7">
                                        <span className="text-xl font-extrabold text-start">1,000+</span>
                                        <span className="text-sm text-end">Merchants under management</span>
                                    </li>
                                    <li className="flex justify-between items-baseline gap-7">
                                        <span className="text-xl font-extrabold text-start">12+</span>
                                        <span className="text-sm text-end">Global team members</span>
                                    </li>
                                </ul>
                            </motion.div>
                        </div>
                        <motion.div initial={{opacity:0, y:100}} whileInView={{opacity:1, y:0}} transition={{duration:.5}} className="space-y-5 w-1/2 text-start">
                            <p>We built a payment platform that prioritizes what truly matters, partnerships, trust, and long-term success.</p>
                            <p>Most payment processors focus on fees and features. But what about you?</p>
                            <p>We're changing the game by putting your business first with our customized payment solutions which don’t just process transactions, but they fuel your growth and help you thrive in any market.</p>
                            <p>We don't just power payments. We power your business.</p>
                        </motion.div>
                    </div>
                </div>            
            </motion.div>

            {/* Our Values */}
            <section className="my-20 text-black">
                <h1 className="text-3xl font-extrabold py-10">Our Values</h1>
                <hr style={{backgroundColor: 'black', border: 'none', height: '0.5px', width: '100%'}} className="my-5"/>
                <div className="flex gap-5 justify-between">
                    <span><svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.722168" width="47" height="47" rx="23.5" stroke="#28DC6E"/><path d="M28 33.7256C29.1106 34.0488 30.285 34.2222 31.4999 34.2222C33.4716 34.2222 35.3367 33.7657 36.9952 32.9526C36.9983 32.8762 36.9999 32.7994 36.9999 32.7222C36.9999 29.6846 34.5375 27.2222 31.4999 27.2222C29.6092 27.2222 27.9414 28.1762 26.9514 29.6291M28 33.7256V33.7222C28 32.2383 27.6198 30.8432 26.9514 29.6291M28 33.7256C28 33.7731 27.9996 33.8206 27.9988 33.8679C25.5165 35.3625 22.6086 36.2222 19.5 36.2222C16.3914 36.2222 13.4835 35.3625 11.0012 33.8679C11.0004 33.8194 11 33.7709 11 33.7222C11 29.0277 14.8056 25.2222 19.5 25.2222C22.7106 25.2222 25.5054 27.0022 26.9514 29.6291M24 16.7222C24 19.2074 21.9853 21.2222 19.5 21.2222C17.0147 21.2222 15 19.2074 15 16.7222C15 14.2369 17.0147 12.2222 19.5 12.2222C21.9853 12.2222 24 14.2369 24 16.7222ZM35 19.7222C35 21.6552 33.433 23.2222 31.5 23.2222C29.567 23.2222 28 21.6552 28 19.7222C28 17.7892 29.567 16.2222 31.5 16.2222C33.433 16.2222 35 17.7892 35 19.7222Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
                    <h5 className="w-[50%] font-bold pt-2">Beyond Transactions, We Build Relationships</h5>
                    <div className="space-y-5 w-3/5">
                        <p>We take the time to understand your business, challenges, and goals.</p>
                        <p>Our solutions grow with you—because real success is built on trust, not just technology.</p> 
                    </div>
                </div>
                <hr style={{backgroundColor: 'black', border: 'none', height: '0.5px', width: '100%'}} className="my-5"/>
                <div className="flex gap-5 justify-between">
                    <span><svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.722168" width="47" height="47" rx="23.5" stroke="#28DC6E"/><path d="M26 36.2222V26.2222C26 25.6699 26.4477 25.2222 27 25.2222H31C31.5523 25.2222 32 25.6699 32 26.2222V36.2222M26 36.2222H11.1478M26 36.2222H32M32 36.2222H36.8522M35 36.2222V20.6873M13 36.2222V20.6876M13 20.6876C14.5297 21.5718 16.5197 21.3595 17.8284 20.0508C17.8879 19.9913 17.9451 19.9304 18.0001 19.8682C18.7331 20.6985 19.8054 21.2222 21 21.2222C22.1947 21.2222 23.2671 20.6985 24 19.868C24.7329 20.6985 25.8053 21.2222 27 21.2222C28.1946 21.2222 29.2668 20.6986 29.9998 19.8683C30.0546 19.9304 30.1118 19.9912 30.1712 20.0507C31.48 21.3595 33.4702 21.5717 35 20.6873M13 20.6876C12.7038 20.5164 12.4249 20.3041 12.1716 20.0508C10.6095 18.4887 10.6095 15.956 12.1716 14.3939L13.7573 12.8082C14.1324 12.4331 14.6411 12.2224 15.1715 12.2224H32.8282C33.3587 12.2224 33.8674 12.4331 34.2425 12.8082L35.8281 14.3938C37.3902 15.9559 37.3902 18.4886 35.8281 20.0507C35.5748 20.3039 35.296 20.5161 35 20.6873M17 32.2222H22C22.5523 32.2222 23 31.7745 23 31.2222V26.2222C23 25.6699 22.5523 25.2222 22 25.2222H17C16.4477 25.2222 16 25.6699 16 26.2222V31.2222C16 31.7745 16.4477 32.2222 17 32.2222Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
                    <h5 className="w-[50%] font-bold pt-2">Empowering Local Businesses & Communities</h5>
                    <div className="space-y-5 w-3/5">
                        <p>Every transaction should do more than process a payment—it should create opportunities.</p> 
                        <p>By supporting small businesses and communities, we help drive economic growth where it matters most.</p>
                    </div>
                </div>
                <hr style={{backgroundColor: 'black', border: 'none', height: '0.5px', width: '100%'}} className="my-5"/>
                <div className="flex gap-5 justify-between">
                    <span><svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.722168" width="47" height="47" rx="23.5" stroke="#28DC6E"/><path d="M23.308 12.887C23.5642 12.2711 24.4368 12.2711 24.693 12.887L27.5276 19.7023C27.6356 19.962 27.8798 20.1394 28.1601 20.1619L35.5178 20.7517C36.1828 20.8051 36.4524 21.6349 35.9458 22.0689L30.34 26.8709C30.1264 27.0538 30.0331 27.3409 30.0984 27.6145L31.8111 34.7943C31.9658 35.4432 31.2599 35.9561 30.6906 35.6084L24.3914 31.7609C24.1514 31.6143 23.8495 31.6143 23.6095 31.7609L17.3103 35.6084C16.741 35.9561 16.0351 35.4432 16.1899 34.7943L17.9025 27.6145C17.9678 27.3409 17.8745 27.0538 17.6609 26.8709L12.0551 22.0689C11.5485 21.6349 11.8181 20.8051 12.4831 20.7517L19.8408 20.1619C20.1211 20.1394 20.3653 19.962 20.4733 19.7023L23.308 12.887Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
                    <h5 className="w-[50%] font-bold pt-2">Reliable Future-Proof Payments</h5>
                    <div className="space-y-5 w-3/5">
                        <p>Your business needs a payment solution that works no matter what.</p> 
                        <p>Our reliable, flexible system keeps you running, so you can focus on what truly matters—growing your business.</p>
                    </div>
                    </div>
            </section>
        </div>
    )
}