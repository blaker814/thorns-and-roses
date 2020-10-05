import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { LocationCard } from "./location/LocationCard"
import { AnimalCard } from "./animal/AnimalCard"
import { CustomerCard } from "./customer/CustomerCard"
import { EmployeeCard } from "./employee/EmployeeCard"

export const ApplicationViews = (props) => {
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>

            <Route path="/nurseries">
                <></>
            </Route>
            
            <Route path="/distributors">
                <></>
            </Route>

            <Route path="/retailers">
                <></>
            </Route>
        </>
    )
}
