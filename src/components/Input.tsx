import { forwardRef, InputHTMLAttributes } from "react"

interface CustomInputProp extends InputHTMLAttributes<HTMLInputElement>{
    label?: string,
    note?: string,
}

const Input = forwardRef<HTMLInputElement, CustomInputProp>(({label, note, ...props}, ref) =>{
    return(
        <div>
            <div className="space-y-2">
                <p className="font-bold text-sm">{label}</p>
                <div className="flex items-center border border-stone-300 px-2 z-10 bg-white text-black rounded-lg">
                    <input ref={ref} className="border-0 p-2 outline-0 w-full" type="text" placeholder="Type something here" {...props} />
                </div>           
            </div>       
            <div className="text-xs text-stone-400">{note}</div>      
        </div>
    )
})

export default Input