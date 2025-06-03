import * as motion from "motion/react-client"

export default function SlideUp({children, inView, duration=.5}:{children:React.ReactNode, inView?:boolean, duration?:number}){

    if (inView){
        return(
            <motion.div initial={{ opacity:0, y:100 }} whileInView={{ opacity:1, y:0 }} transition={{duration: duration}}>
                {children}
            </motion.div>
        )        
    }

    return(
        <motion.div initial={{ opacity:0, y:100 }} animate={{ opacity:1, y:0 }} transition={{duration: duration}}>
            {children}
        </motion.div>
    )

}