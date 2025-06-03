import * as motion from "motion/react-client"

export default function Hero({header, paragraph, children, blogPost, className, aboutPage} : {header: string, paragraph: string, children?: React.ReactNode, blogPost?:boolean, className?: string, aboutPage?:boolean}){
    const gradientBg = aboutPage ?
    "radial-gradient(ellipse at bottom, #106B38, #08311A, #04100C, #000)"
    :
    "radial-gradient(ellipse at top, #106B38, #08311A, #000)"

    return(
        <div style={{background: gradientBg}} className={`pt-40 ${className}`}>
            <motion.div initial={{ opacity:0, x:-100 }} animate={{ opacity:1, x:0 }} transition={{duration: .5}} className="relative pb-10"> 
                <main className={`${blogPost ? 'text-start' : 'text-center'} space-y-7 flex flex-col bg-[url('/grid.png')] bg-cover`}>
                    <h1 className={`text-4xl font-extrabold w-2/5 ${blogPost ? 'ml-24' : 'mx-auto'} `}>{header}</h1>
                    <p className="text-sm w-2/4 mx-auto">{paragraph}</p>
                    {children}
                </main>
            </motion.div>
        </div>
    )
}