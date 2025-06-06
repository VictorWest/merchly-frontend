"use client"
import ButtonComponent from "@/components/Button";
import { getTestimonies, Testimony } from "@/data/data";
import Image from "next/image";
import { useEffect, useState } from "react";
import * as motion from "motion/react-client"
import dynamic from 'next/dynamic';

const AnimatePresence = dynamic(
  () => import('framer-motion').then((mod) => mod.AnimatePresence),
  { ssr: false }
);

export default function Testimonials(){
    const [ page, setPage ] = useState(1)
    const [ data, setData ] = useState<Testimony[]>([])

    useEffect(() => {
        const result = JSON.parse(getTestimonies())
        setData(result)
    }, [])

    useEffect(() => {
        if(data.length == 0) return;

        const interval = setInterval(() => {
            setPage((prev) => prev >= data.length ? 1 : prev + 1)
        }, 3000)

        return () => clearInterval(interval)
    }, [data.length])


    return(
        <div className="relative p-10 md:py-25 md:px-20 bg-gradient-to-b from-[#3DDF7C] to-[#279689] md:space-y-3 text-black text-center md:text-start">
            <header>
                <p className="md:font-medium font-bold">Testimonials</p>
                <div className="flex flex-col md:flex-row items-center justify-between gap-5">
                    <h3 className="text-2xl md:text-3xl font-extrabold mt-2 md:mt-0">Hear what they said about us</h3> 
                    <hr style={{backgroundColor: 'black', border: 'none', height: '1px', width: '40%'}} />
                    <div className="flex gap-3">
                        <ButtonComponent onClick={() => setPage((prev) => prev == 1  ? data.length : prev - 1)} className="hidden md:block w-fit rounded-full border-2" bg="#2A2A2D"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M20.4 11.9998C20.4 12.4969 19.9971 12.8998 19.5 12.8998L6.73452 12.8998L11.7238 17.6511C12.0821 17.9956 12.0933 18.5653 11.7488 18.9236C11.4043 19.2819 10.8345 19.2931 10.4762 18.9486L3.87623 12.6486C3.69976 12.4789 3.60002 12.2446 3.60002 11.9998C3.60002 11.755 3.69976 11.5207 3.87623 11.3511L10.4762 5.05106C10.8345 4.70654 11.4043 4.71771 11.7488 5.07601C12.0933 5.4343 12.0821 6.00404 11.7238 6.34856L6.73452 11.0998L19.5 11.0998C19.9971 11.0998 20.4 11.5027 20.4 11.9998Z" fill="white"/>
                            </svg>
                        </ButtonComponent>
                        <ButtonComponent onClick={() => setPage((prev) => prev == data.length  ? 1 : prev + 1)} className="hidden md:block w-fit rounded-full border-2 border-[#242425]" bg="#2A2A2D"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M3.59998 12.0002C3.59998 11.5031 4.00292 11.1002 4.49998 11.1002L17.2655 11.1002L12.2762 6.34894C11.9179 6.00443 11.9067 5.43469 12.2512 5.0764C12.5957 4.7181 13.1655 4.70693 13.5238 5.05144L20.1238 11.3514C20.3002 11.5211 20.4 11.7554 20.4 12.0002C20.4 12.245 20.3002 12.4793 20.1238 12.6489L13.5238 18.9489C13.1655 19.2935 12.5957 19.2823 12.2512 18.924C11.9067 18.5657 11.9179 17.996 12.2762 17.6514L17.2655 12.9002L4.49998 12.9002C4.00292 12.9002 3.59998 12.4973 3.59998 12.0002Z" fill="white"/>
                            </svg>
                        </ButtonComponent>                    
                    </div>
                </div>                
            </header>


            {data.length !== 0 && (
            <AnimatePresence mode="wait">
                <motion.main
                key={page} 
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex flex-col md:flex-row gap-5 mt-10 md:mt-20 items-start md:w-4/5 mx-auto overflow-hidden"
                >
                <p className="text-9xl font-extrabold hidden md:block">&quot;</p>
                
                <div className="flex flex-col gap-5 mx-auto md:m-0 md:ml-10">
                    <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mx-auto md:m-0">
                    <Image 
                        className="rounded-full" 
                        src={data[page - 1].imageUrl} 
                        alt={data[page - 1].name} 
                        width={100} 
                        height={100} 
                    />
                    </motion.div>
                    
                    <div>
                    <h2 className="text-lg md:text-3xl font-extrabold">{data[page - 1].name}</h2>
                    <p className="text-sm md:text-base">-{data[page - 1].occupation}</p>
                    </div>
                </div>
                
                <motion.p 
                    className="md:ml-auto md:w-[60%] h-52"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    {data[page - 1].review}
                </motion.p>
                </motion.main>
            </AnimatePresence>
            )}
        </div>
    )
}