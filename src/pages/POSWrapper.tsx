import InfoCard from "@/components/InfoCard";
import Image from "next/image";

export default function POSWrapper(){
    return(
      <div className="relative group p-6 rounded-lg bg-black border border-gray-800 overflow-hidden">
        <div className="relative z-10">
          <div className="flex gap-10 items-center text-black px-20 pb-25">
              <div className="flex flex-col gap-5">
                  <Image src="/logo-expanded.png" alt="logo" width={100} height={100}/>
                  <h1 className="font-extrabold text-white text-4xl">Accessible Payment Service and Infrastructure For Everyone</h1>
                  <p className="pr-15 text-white">Your business needs a payment solution that works for you, not against you. We simplify payments, enabling custom experiences and smooth, steady cash flow.</p>
              </div>
              <Image src="/pos.png" alt="Ach" width={500} height={500}/>
          </div>
      </div>
      <div className="flex ml-auto gap-5">
        <InfoCard 
          svg={<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="#28DC6E"/>
                <path d="M29 16C29 18.7614 26.7614 21 24 21C21.2385 21 19 18.7614 19 16C19 13.2386 21.2385 11 24 11C26.7614 11 29 13.2386 29 16Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.0015 34.8243C14.0952 29.3825 18.5358 25 24 25C29.4643 25 33.9049 29.3827 33.9984 34.8247C30.9547 36.2214 27.5685 37 24.0004 37C20.4319 37 17.0454 36.2212 14.0015 34.8243Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>}
          header="Client-First Approach"
          paragraph="We take the time to understand your business, aligning solutions for it to evolve."
        />
        <InfoCard 
          svg={<svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.833252" y="0.5" width="47" height="47" rx="23.5" stroke="#28DC6E"/>
            <path d="M28.3333 22C28.3333 24.2091 26.5424 26 24.3333 26C22.1241 26 20.3333 24.2091 20.3333 22C20.3333 19.7909 22.1241 18 24.3333 18C26.5424 18 28.3333 19.7909 28.3333 22Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M34.3333 22C34.3333 31.5228 24.3333 37 24.3333 37C24.3333 37 14.3333 31.5228 14.3333 22C14.3333 16.4772 18.8104 12 24.3333 12C29.8561 12 34.3333 16.4772 34.3333 22Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>}
          header="Powering Local Business."
          paragraph="Prioritizing local businesses with tailored payments, mentorship, and community growth."
        />
        <InfoCard 
        svg={<svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1.1665" y="0.5" width="47" height="47" rx="23.5" stroke="#28DC6E"/>
          <path d="M28.6665 33.5034C29.7771 33.8267 30.9515 34 32.1664 34C34.1381 34 36.0032 33.5435 37.6617 32.7304C37.6649 32.654 37.6664 32.5772 37.6664 32.5C37.6664 29.4624 35.204 27 32.1664 27C30.2757 27 28.6079 27.954 27.6179 29.4069M28.6665 33.5034V33.5C28.6665 32.0161 28.2863 30.6211 27.6179 29.4069M28.6665 33.5034C28.6665 33.5509 28.6661 33.5984 28.6653 33.6458C26.183 35.1403 23.2751 36 20.1665 36C17.0579 36 14.15 35.1403 11.6677 33.6458C11.6669 33.5973 11.6665 33.5487 11.6665 33.5C11.6665 28.8056 15.4721 25 20.1665 25C23.3771 25 26.1719 26.78 27.6179 29.4069M24.6665 16.5C24.6665 18.9853 22.6518 21 20.1665 21C17.6812 21 15.6665 18.9853 15.6665 16.5C15.6665 14.0147 17.6812 12 20.1665 12C22.6518 12 24.6665 14.0147 24.6665 16.5ZM35.6665 19.5C35.6665 21.433 34.0995 23 32.1665 23C30.2335 23 28.6665 21.433 28.6665 19.5C28.6665 17.567 30.2335 16 32.1665 16C34.0995 16 35.6665 17.567 35.6665 19.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>}
        header="Opportunities for Communities"
        paragraph="Building local partnerships to strengthen the economy fabrics with business development."
        />
      </div>

      {/* Glowing edge - Top Right */}
      <div className="absolute top-[-20] right-[-20] w-64 h-64 bg-gradient-to-br from-[#3DDF7C] to-transparent opacity-70 blur-[80px]"></div>

      {/* Glowing edge - Bottom Left */}
      <div className="absolute bottom-[-20] left-[-20] w-64 h-100 bg-gradient-to-tl from-[#3DDF7C] to-transparent opacity-70 blur-[80px]"></div>
    </div>
    )
}