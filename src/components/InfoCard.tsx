export default function InfoCard({svg, header, paragraph, className, children} : {svg: React.ReactNode, header: string, paragraph: string, className?: string, children?:React.ReactNode}){
    return(
        <div className={`bg-gradient-to-b from-[#28DC6E66]/70 to-[#28DC6E66]/40 rounded-2xl p-5 flex flex-col gap-3 ${className}`}>
            <span>{svg}</span>
            <h2 className="font-extrabold">{header}</h2>
            <p className="text-sm">{paragraph}</p>
            {children}
        </div>
    )
}