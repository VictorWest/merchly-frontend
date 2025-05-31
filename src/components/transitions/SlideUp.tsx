import * as motion from "motion/react-client"

export default function SlideUp({children, duration=.5}:{children:React.ReactNode, duration?:number}){
    return(
        <motion.div initial={{ opacity: 0, y:100 }} animate={{ opacity: 1, y:0 }} transition={{duration: duration}}>
            {children}
        </motion.div>
    )
}