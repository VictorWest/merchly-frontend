import Hero from "@/components/Hero";
import TipsBlogsArticle from "@/components/TipsBlogsArticle";

export default function BlogsHero(){
    return(
        <div>
            <Hero header="All About Payment Solution & Finance Knowledge" paragraph="Payment solution & finance insight tailored to your unique goals and achieve your business goals." />   
            <main className="bg-[#F4F4F5] text-black relative overflow-hidden py-3 h-15">
                <div className="absolute flex items-center gap-10 animate-infinite-scroll">
                    {[1,2,3,4,5,6,7,8].map((id) => (
                        <TipsBlogsArticle key={id} />
                    ))}
                </div>
            </main>        
        </div>
    )
}