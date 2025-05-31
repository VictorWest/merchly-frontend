"use client"
import { useEffect, useState } from "react"

export default function ProgressBar(){
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / docHeight) * 100;
            handleScrollProgress(progress);
        };

        window.addEventListener('scroll', updateProgress);
        return () => window.removeEventListener('scroll', updateProgress);
    }, []);

    const handleScrollProgress = (progress: number) => {
        setScrollProgress(progress)
    }
    
    return(
        <div className="w-full h-2 rounded-full bg-gray-200 z-50">
            <div
                className="h-full bg-[#21C963] rounded-full transition-all duration-75"
                style={{ width: `${scrollProgress}%` }}
            />
        </div>
    )
}