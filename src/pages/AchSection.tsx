import AchComponent from "@/components/Ach";
import Image from "next/image";

export default function AchSection(){
    let carouselArray = [1, 2, 3, 4, 5]
    return(
        <div className="bg-white">
            {/* Trusted Partners */}
            <div className="relative">
                <h2 className="text-center p-5 text-black font-extrabold">Trusted by</h2>
                <div className="relative overflow-hidden h-32">
                    <div className="absolute flex animate-infinite-scroll">
                        {carouselArray.map((item) => (
                            <Image 
                                key={item}
                                src={`/partners/image${item}.png`} 
                                className="mx-4"
                                width={100}
                                height={100}
                                alt={`Image ${item}`}
                            />
                        ))}
                        {/* Duplicate for seamless looping */}
                        {carouselArray.map((item) => (
                            <Image 
                                key={item}
                                src={`/partners/image${item}.png`} 
                                className="mx-4"
                                width={100}
                                height={100}
                                alt={`Image ${item}`}
                            />
                        ))}
                    </div>
                </div>                
            </div>  

            <AchComponent 
                imgUrl="/ach/ach1.png" 
                svg={<svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="1" width="47" height="47" rx="23.5" stroke="#28DC6E"/><path d="M11 19.5H37M11 20.5H37M15 27.5H23M15 30.5H19M14 34.5H34C35.6569 34.5 37 33.1569 37 31.5V17.5C37 15.8431 35.6569 14.5 34 14.5H14C12.3431 14.5 11 15.8431 11 17.5V31.5C11 33.1569 12.3431 34.5 14 34.5Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>}
                header="Merchant Payment Services"     
                pargraph="Simplify and enhance your payment processing experience with a wide range of payment methods, including credit cards, debit cards, and digital wallets."   
            />    
            <AchComponent 
                imgUrl="/ach/ach2.png" 
                svg={<svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="1" width="47" height="47" rx="23.5" stroke="#28DC6E"/><path d="M24 36.5V25.5M29 36.5V25.5M19 36.5V25.5M12 20.5L24 12.5L36 20.5M34 36.5V22.2767C30.7417 21.7654 27.4019 21.5 24 21.5C20.5981 21.5 17.2583 21.7654 14 22.2767V36.5M12 36.5H36M24 17.5H24.01V17.51H24V17.5Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>}
                header="Automated Clearing House (ACH)"     
                pargraph="ACH Processing solutions, designed to simplify and enhance the payment processing experience, ensuring that businesses thrive in today's dynamic market."   
            />
            <AchComponent 
                imgUrl="/ach/ach3.png" 
                svg={<svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="1" width="47" height="47" rx="23.5" stroke="#28DC6E"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24 15.5C25.6174 15.5 27.2205 15.5609 28.8069 15.6806C30.9595 15.843 32.657 17.5405 32.8194 19.6931C32.8781 20.471 32.9226 21.2529 32.9528 22.0386L30.7071 19.7929C30.3166 19.4024 29.6834 19.4024 29.2929 19.7929C28.9024 20.1834 28.9024 20.8166 29.2929 21.2071L33.2929 25.2071C33.6834 25.5976 34.3166 25.5976 34.7071 25.2071L38.7071 21.2071C39.0976 20.8166 39.0976 20.1834 38.7071 19.7929C38.3166 19.4024 37.6834 19.4024 37.2929 19.7929L34.9575 22.1283C34.9264 21.262 34.8784 20.4 34.8137 19.5427C34.577 16.4042 32.0958 13.923 28.9573 13.6863C27.3209 13.5628 25.6677 13.5 24 13.5C22.3323 13.5 20.6791 13.5628 19.0427 13.6863C15.9042 13.923 13.423 16.4042 13.1863 19.5427C13.1638 19.8407 13.1433 20.1393 13.1249 20.4385C13.0909 20.9897 13.5102 21.4641 14.0614 21.4981C14.6127 21.5321 15.0871 21.1128 15.1211 20.5615C15.139 20.2715 15.1588 19.982 15.1806 19.6931C15.343 17.5405 17.0405 15.843 19.1931 15.6806C20.7795 15.5609 22.3826 15.5 24 15.5ZM14.7071 23.7929C14.3166 23.4024 13.6834 23.4024 13.2929 23.7929L9.29289 27.7929C8.90237 28.1834 8.90237 28.8166 9.29289 29.2071C9.68342 29.5976 10.3166 29.5976 10.7071 29.2071L13.0425 26.8717C13.0736 27.738 13.1216 28.6 13.1863 29.4573C13.423 32.5958 15.9042 35.077 19.0427 35.3137C20.6791 35.4372 22.3323 35.5 24 35.5C25.6677 35.5 27.3209 35.4372 28.9573 35.3137C32.0958 35.077 34.577 32.5958 34.8137 29.4573C34.8362 29.1593 34.8567 28.8607 34.8751 28.5616C34.9091 28.0103 34.4898 27.5359 33.9386 27.5019C33.3873 27.4679 32.9129 27.8872 32.8789 28.4384C32.861 28.7285 32.8412 29.018 32.8194 29.3069C32.657 31.4595 30.9595 33.157 28.8069 33.3194C27.2205 33.4391 25.6174 33.5 24 33.5C22.3826 33.5 20.7795 33.4391 19.1931 33.3194C17.0405 33.157 15.343 31.4595 15.1806 29.3069C15.1219 28.529 15.0774 27.7471 15.0472 26.9614L17.2929 29.2071C17.6834 29.5976 18.3166 29.5976 18.7071 29.2071C19.0976 28.8166 19.0976 28.1834 18.7071 27.7929L14.7071 23.7929Z" fill="#0F172A"/></svg>}
                header="Recurring & Subscription Payment Gateway"     
                pargraph="An advanced payment gateway allows customers to pay with credit/debit cards, ACH, and digital wallets while ensuring robust security, so you can focus on growing your business without transaction concerns."   
            />              
            <AchComponent 
                imgUrl="/ach/ach4.png" 
                svg={<svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.857178" width="47" height="47" rx="23.5" stroke="#28DC6E"/><path fill-rule="evenodd" clip-rule="evenodd" d="M23.4961 10.4934C23.8075 10.3118 24.1925 10.3118 24.5039 10.4934L27.5039 12.2434C27.9809 12.5217 28.1421 13.134 27.8638 13.611C27.5855 14.0881 26.9732 14.2492 26.4961 13.971L24 12.5149L21.5039 13.971C21.0268 14.2492 20.4145 14.0881 20.1362 13.611C19.8579 13.134 20.0191 12.5217 20.4961 12.2434L23.4961 10.4934ZM15.8638 16.1033C16.1421 16.5804 15.9809 17.1927 15.5039 17.471L13.9846 18.3572L15.5039 19.2434C15.9809 19.5217 16.1421 20.134 15.8638 20.611C15.5855 21.0881 14.9732 21.2492 14.4961 20.971L13 20.0982V21.3572C13 21.9095 12.5523 22.3572 12 22.3572C11.4477 22.3572 11 21.9095 11 21.3572V18.3572C11 18.0015 11.1889 17.6726 11.4961 17.4934L14.4961 15.7434C14.9732 15.4651 15.5855 15.6263 15.8638 16.1033ZM32.1362 16.1033C32.4145 15.6263 33.0268 15.4651 33.5039 15.7434L36.5039 17.4934C36.8111 17.6726 37 18.0015 37 18.3572V21.3572C37 21.9095 36.5523 22.3572 36 22.3572C35.4477 22.3572 35 21.9095 35 21.3572V20.0982L33.5039 20.971C33.0268 21.2492 32.4145 21.0881 32.1362 20.611C31.8579 20.134 32.0191 19.5217 32.4961 19.2434L34.0154 18.3572L32.4961 17.471C32.0191 17.1927 31.8579 16.5804 32.1362 16.1033ZM20.1362 23.1033C20.4145 22.6263 21.0268 22.4651 21.5039 22.7434L24 24.1995L26.4961 22.7434C26.9732 22.4651 27.5855 22.6263 27.8638 23.1033C28.1421 23.5804 27.9809 24.1927 27.5039 24.471L25 25.9315V28.3572C25 28.9095 24.5523 29.3572 24 29.3572C23.4477 29.3572 23 28.9095 23 28.3572V25.9315L20.4961 24.471C20.0191 24.1927 19.8579 23.5804 20.1362 23.1033ZM12 26.3572C12.5523 26.3572 13 26.8049 13 27.3572V29.7828L15.5039 31.2434C15.9809 31.5217 16.1421 32.134 15.8638 32.611C15.5855 33.0881 14.9732 33.2492 14.4961 32.971L11.4961 31.221C11.1889 31.0417 11 30.7128 11 30.3572V27.3572C11 26.8049 11.4477 26.3572 12 26.3572ZM36 26.3572C36.5523 26.3572 37 26.8049 37 27.3572V30.3572C37 30.7128 36.8111 31.0417 36.5039 31.221L33.5039 32.971C33.0268 33.2492 32.4145 33.0881 32.1362 32.611C31.8579 32.134 32.0191 31.5217 32.4961 31.2434L35 29.7828V27.3572C35 26.8049 35.4477 26.3572 36 26.3572ZM24 33.3572C24.5523 33.3572 25 33.8049 25 34.3572V35.6161L26.4961 34.7434C26.9732 34.4651 27.5855 34.6263 27.8638 35.1033C28.1421 35.5804 27.9809 36.1927 27.5039 36.471L24.5039 38.221C24.1925 38.4026 23.8075 38.4026 23.4961 38.221L20.4961 36.471C20.0191 36.1927 19.8579 35.5804 20.1362 35.1033C20.4145 34.6263 21.0268 34.4651 21.5039 34.7434L23 35.6161V34.3572C23 33.8049 23.4477 33.3572 24 33.3572Z" fill="#0F172A"/></svg>}
                header="Payment Infrastructures"   
                pargraph="Covers Point of Sale (POS), cash discounting, and residual paying referrals with customized payment infrastructure and experiences."   
            />    
        </div>
    )
}