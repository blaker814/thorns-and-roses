import React, { useState, createContext } from "react"

export const DistributorContext = createContext()

export const DistributorProvider = (props) => {
    const [distributors, setDistributors] = useState([])

    const getDistributors = () => {
        return fetch("http://localhost:8088/distributors")
            .then(res => res.json())
            .then(setDistributors)
    }

    const addDistributor = distributor => {
        return fetch("http://localhost:8088/distributors", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(distributor)
        })
    }

    return (
        <DistributorContext.Provider value={{
            distributors, getDistributors, addDistributor
        }}>
            {props.children}
        </DistributorContext.Provider>
    )
}