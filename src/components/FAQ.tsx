"use client"
import { useState } from "react"
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

export default function FAQ({question, answer} : {question: string, answer: string}){
    const [ chevronIsClicked, setChevronIsClicked ] = useState(false)

    return(
        <div>
            <div onClick={() => setChevronIsClicked(prev => !prev)} className={`bg-[#F4F4F5] hover:bg-[#21C963]/10 p-3 ${chevronIsClicked ? 'rounded-t-lg' : 'rounded-lg'} flex justify-between items-center cursor-pointer`}>
                <h3 className="text-start">{question}</h3>
                <div>
                    { chevronIsClicked ? <FaChevronUp /> : <FaChevronDown />}
                </div>
            </div>       
            {chevronIsClicked && <div className="bg-white border border-t-0 border-gray-200 p-4 rounded-b-lg">{answer}</div>}     
        </div>
    )
}