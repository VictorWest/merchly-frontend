export default function ButtonComponent(
    {className, children, bg, textColour, onClick}: 
    Readonly<{className?: string, bg?: string, textColour?: string, children: React.ReactNode, onClick?: React.MouseEventHandler}>){
    return(
        <div onClick={onClick} style={{backgroundColor: bg || '#21C963', color: textColour || 'black'}} className={`h-fit px-3 py-2 font-extrabold rounded-full cursor-pointer ${className}`}>
            {children}
        </div>
    )
}