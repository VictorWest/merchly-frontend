export default function ContactInfo({ svg, header, detail, invertBg }:{ svg:React.ReactNode, header: string, detail?: string, invertBg?: boolean }){
    return(
        <div style={{backgroundColor: invertBg ? 'white' : '#EAEAEA' }} 
            className="flex justify-between items-center p-5 rounded-xl">
            <div className="flex gap-5 items-center">
                <span>{svg}</span>
                <div>
                    <p className="font-bold">{header}</p>
                    <p className="text-sm">{detail}</p>
                </div>
            </div>
            <span><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 20L21 16M21 16L17 12M21 16L11 16M28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z" stroke="#19191A" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
        </div>
    )
}