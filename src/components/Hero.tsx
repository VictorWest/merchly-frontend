import * as motion from "motion/react-client"

export default function Hero({header, paragraph, children, blogPost, className, aboutPage} : {header: string, paragraph: string, children?: React.ReactNode, blogPost?:boolean, className?: string, aboutPage?:boolean}){
    const gradientBg = aboutPage ?
    "radial-gradient(ellipse at bottom, #106B38, #08311A, #04100C, #000)"
    :
    "radial-gradient(ellipse at top, #106B38, #08311A, #000)"

    return(
        <div style={{background: gradientBg}} className={`pt-30 md:pt-40 ${className}`}>
            <motion.div initial={{ opacity:0, y:200 }} animate={{ opacity:1, y:0 }} transition={{duration: 1}} className="relative pb-10"> 
                <main className={`${blogPost ? 'md:text-start' : 'text-center'} space-y-7 flex flex-col bg-[url('/grid.png')] bg-cover`}>
                    <h1 className={`text-3xl md:text-4xl font-extrabold md:w-2/5 p-10 md:p-0 ${blogPost ? 'md:ml-24' : 'mx-auto'} `}>{header}</h1>
                    <p className="text-xs md:text-sm pb-10 md:pb-0 w-3/5 md:w-1/2 mx-auto">{paragraph}</p>
                    {children}
                </main>
            </motion.div>
        </div>
    )
}