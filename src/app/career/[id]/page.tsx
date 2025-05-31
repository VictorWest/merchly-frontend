"use client"
import Hero from "@/components/Hero"
import { availablePositionDetails, PositionDetails } from "@/data/positions"
import CareerDetails from "@/pages/CareerPages/CareerDetails"
import CareerOthers from "@/pages/CareerPages/CareerOthers"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function CareerDetail(){
    const params = useParams()
    const [careerDataState, setCareerDataState] = useState<PositionDetails[]>()

    const handleCareerDataState = () => {
        setCareerDataState(() => [...availablePositionDetails].filter((item) => {
            return item.id == params?.id
        }))
    }

    useEffect(() => {
        handleCareerDataState()
    }, [params?.id])

    return(
        <div>
            {careerDataState?.length == 1 ? 
                <div>
                    <Hero header={careerDataState[0].title} paragraph="" blogPost></Hero>
                    <CareerDetails careerData={careerDataState[0]} />
                    <CareerOthers careerData={careerDataState[0]} />
                </div>
            : <p>No results</p>}
        </div>
    )
}