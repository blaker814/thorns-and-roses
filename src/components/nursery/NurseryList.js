import React, { useContext, useEffect } from "react"
import { NurseryContext } from "./NurseryProvider"
import { NurseryCard } from "./NurseryCard"
import "./Nursery.css"

export const NurseryList = () => {
   // This state changes when `getNurserys()` is invoked below
    const { nurseries, getNurseries } = useContext(NurseryContext)
	
	//useEffect - reach out to the world for something
    useEffect(() => {
		getNurseries()	
    }, [])


    return (	
		<div className="nurseries">
        {
			nurseries.map(nursery => {
				return <NurseryCard key={nursery.id} nursery={nursery} />
			})
        }
        </div>
    )
}