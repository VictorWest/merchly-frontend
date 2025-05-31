export default function Hero({header, paragraph, children, blogPost, className} : {header: string, paragraph: string, children?: React.ReactNode, blogPost?:boolean, className?: string}){
    return(
        <div className={`pt-40 bg-[#2A2A2D] ${className}`}>
            <div className="relative pb-10"> 
                <main className={`${blogPost ? 'text-start' : 'text-center'} space-y-7 flex flex-col bg-[url('/grid.png')] bg-cover`}>
                    <h1 className={`text-5xl font-extrabold w-2/5 ${blogPost ? 'ml-24' : 'mx-auto'} `}>{header}</h1>
                    <p className="text-sm w-2/4 mx-auto">{paragraph}</p>
                    {children}
                </main>
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#21C963] to-transparent opacity-30"></div>
            </div>
        </div>
    )
}