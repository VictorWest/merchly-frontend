import FAQ from "@/components/FAQ";

export default function ServicesFAQ(){
    return(
        <div className="bg-white p-20 text-black text-center space-y-7">
            <p className="font-bold text-[#21C963]">Frequently Asked Questions</p>
            <div className="w-2/3 mx-auto space-y-7">
                <h2 className="text-4xl font-extrabold">Explore Questions We've Already Covered</h2>
                <p className="">Still have questions? Don’t hesitate to reach out. We focus on win-win solutions, not just selling a service. That’s why we’re happy to answer your questions first—so you can decide if we’re the right fit for you.</p>

                <div className="mt-15 space-y-7">
                    <FAQ question="When do I need to use a subscription or recurring model?" answer="You should use a subscription or recurring model when your product or service provides ongoing value over time, such as monthly access, regular shipments, or continuous support. This model is ideal for maximizing customer lifetime value, improving cash flow predictability, and building long-term customer relationships." />
                    <FAQ question="What kind of businesses use a subscription or recurring model?" answer="Many types of businesses use subscription or recurring models. These include software companies that provide SaaS tools, media platforms that offer streaming services, subscription box companies that deliver curated items monthly, and fitness or wellness services that provide continuous access to workouts or health programs. Educational platforms that grant access to courses over time also benefit from this model, as it supports customer retention and stable income." />
                    <FAQ question="How can businesses ensure the security of their recurring billing processes?" answer="Businesses can ensure the security of their recurring billing by using PCI-compliant payment processors, encrypting sensitive payment data, and implementing tokenization to protect card information. Additionally, they should perform regular security audits, monitor transactions for suspicious activity, and provide customers with secure portals to manage their billing information. These steps help safeguard financial data and maintain customer trust." />
                    <FAQ question="What payment methods are supported by the Process Payments Now gateway for recurring billing?" answer="The Process Payments Now gateway supports a variety of payment methods for recurring billing. These include major credit and debit cards such as Visa, MasterCard, and American Express, as well as bank transfers through ACH. It also supports digital wallets like PayPal, Apple Pay, and Google Pay, and in some cases, it can process payments made with prepaid or virtual cards. This wide range of options makes it easier for customers to make payments consistently." />                    
                </div>
                                
            </div>
        </div>
    )
}