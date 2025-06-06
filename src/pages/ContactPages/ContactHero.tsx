"use client"
import ButtonComponent from "@/components/Button";
import ContactInfo from "@/components/ContactInfo";
import Input from "@/components/Input";
import { contactDetails } from "@/data/data";
import { useState } from "react";
import * as motion from "motion/react-client"

interface FormData{
  name: string,
  email: string,
  number: string,
  merchant: string,
  message: string
}
export default function ContactHero() {
  const [ formInput, setFormInput ] = useState<FormData>(
    {name: "", email: "", number: "", merchant: "", message: ""}
  )

  return(
    <div>
      <div style={{background:"radial-gradient(ellipse at top, #106B38, #08311A, #000)"}}>
        <div className="bg-[url('/grid.png')] bg-cover relative p-10 md:p-20">
          <motion.div initial={{ opacity:0, x:-100 }} animate={{ opacity:1, x:0 }} transition={{duration: .5}} className="z-10 md:w-1/2 space-y-5 mt-10 py-10 md:py-0">
            <h1 className="text-4xl font-extrabold">Contact</h1>
            <p className="text-sm md:text-base">We'd love to hear from you! Whether you have a question, need support, or want to explore, contact us.</p>
          </motion.div>
        </div>        
      </div>

      <div className="bg-white text-black flex flex-col md:flex-row justify-between gap-10 p-10 md:p-20">
          <div className="md:w-1/2 flex flex-col justify-between gap-10 md:gap-0">
            <div className="space-y-7">
              <h3 className="text-2xl md:text-4xl font-bold">Get connected with our customer services</h3>
              <p className="text-sm md:text-base">We're here to help! Whether you have questions about our services, need technical support, or just want to get in touch, we're always happy to assist you.</p>
            </div>
            <div className="space-y-5 text-xs md:text-base">
              <ContactInfo 
                svg={<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="8" fill="#44ABA0"/><path d="M37 17V31C37 32.6569 35.6569 34 34 34H14C12.3431 34 11 32.6569 11 31V17M37 17C37 15.3431 35.6569 14 34 14H14C12.3431 14 11 15.3431 11 17M37 17V17.3236C37 18.3654 36.4595 19.3326 35.5723 19.8786L25.5723 26.0324C24.6081 26.6258 23.3919 26.6258 22.4277 26.0324L12.4277 19.8786C11.5405 19.3326 11 18.3654 11 17.3236V17" stroke="#EAEAEA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                header="Email"
                detail={contactDetails.email}
              />
              <ContactInfo 
                svg={<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="8" fill="#44ABA0"/><path d="M11 17C11 28.0457 19.9543 37 31 37H34C35.6569 37 37 35.6569 37 34V32.1712C37 31.4829 36.5316 30.8829 35.8638 30.716L29.9662 29.2416C29.3807 29.0952 28.7645 29.314 28.4024 29.7968L27.1088 31.5216C26.7334 32.0222 26.084 32.2435 25.4965 32.0283C21.0872 30.4131 17.5869 26.9128 15.9717 22.5035C15.7565 21.916 15.9778 21.2666 16.4784 20.8912L18.2032 19.5976C18.686 19.2355 18.9048 18.6193 18.7584 18.0338L17.284 12.1362C17.1171 11.4684 16.5171 11 15.8288 11H14C12.3431 11 11 12.3431 11 14V17Z" stroke="#EAEAEA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                header="Contact"
                detail={contactDetails.phoneNumber}
              />
            </div>
          </div>
        <div className="md:w-1/2">
          <form action="#" className="space-y-7 text-xs md:text-base">
            <Input label="Full Name" value={formInput.name} onChange={(e) => setFormInput(prev => ({...prev, name: e.target.value}))}/>
            <div className="md:flex justify-between space-y-7 md:space-y-0 md:gap-5">
              <Input label="Email" note="We’ll never share your details. See our Privacy Policy."  value={formInput.email} onChange={(e) => setFormInput(prev => ({...prev, email: e.target.value}))}/>
              <Input label="Phone Number" note="We’ll never share your details. See our Privacy Policy."  value={formInput.number} onChange={(e) => setFormInput(prev => ({...prev, number: e.target.value}))}/>
            </div>
            <Input label="Merchant Name (Business Name)" value={formInput.merchant} onChange={(e) => setFormInput(prev => ({...prev, merchant: e.target.value}))}/>
            <div className="space-y-2">
                <p className="font-bold text-sm">Message</p>
                <div className="flex items-center border border-stone-300 px-2 z-10 bg-white text-black rounded-lg">
                    <textarea className="border-0 p-2 outline-0 w-full" placeholder="Type something here" rows={7} maxLength={500} value={formInput.message} onChange={(e) => setFormInput(prev => ({...prev, message: e.target.value}))}/>
                </div>           
            </div> 
            <div className="flex gap-2 items-center text-xs"><input type="checkbox" /><span>I agree to the terms and conditions and privacy policy of this website by submitting my information.</span></div>
            <ButtonComponent bg="#2A2A2D" textColour="white" className="flex items-center gap-3 justify-center">
              <span>Send Message</span>
              <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.75 15L15.75 12M15.75 12L12.75 9M15.75 12L8.25 12M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
            </ButtonComponent>
          </form>
        </div>
      </div>
    </div>
  )
}
