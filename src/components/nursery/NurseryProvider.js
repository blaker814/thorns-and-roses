import React, { useState, createContext } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const NurseryContext = createContext()

/*
 This component establishes what data can be used.
 */
export const NurseryProvider = (props) => {
    const [nurseries, setNurseries] = useState([])

    const getNurseries = () => {
        return fetch("http://localhost:8088/nurseries?_embed=nurseryFlowers&_embed=nurseryDistributors")
            .then(res => res.json())
            .then(setNurseries)
    }

    const addNursery = nursery => {
        return fetch("http://localhost:8088/nurseries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(nursery)
        })
            .then(getNurseries)
    }

    return (
        <NurseryContext.Provider value={{
            nurseries, getNurseries, addNursery
        }}>
            {props.children}
        </NurseryContext.Provider>
    )
}