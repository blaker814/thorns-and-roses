import React, { useContext, useEffect } from "react"
import { NurseryContext } from "./NurseryProvider"
import { NurseryCard } from "./NurseryCard"
import "./Nursery.css"
import { FlowerContext } from "../flower/FlowerProvider"
import { DistributorContext } from "../distributor/DistributorProvider"

export const NurseryList = () => {
    const { nurseries, getNurseries } = useContext(NurseryContext)
    const { flowers, getFlowers } = useContext(FlowerContext)
    const { distributors, getDistributors } = useContext(DistributorContext)

    useEffect(() => {
        getFlowers()
        getDistributors()
        getNurseries()
    }, [])

    return (	
		<div className="nurseries">
            {
                nurseries.map(nursery => {
                    return <NurseryCard key={nursery.id} flowers={flowers} distributors={distributors} nursery={nursery} />
                })
            }
        </div>
    )
}