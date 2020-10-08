import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { NurseryProvider } from "./nursery/NurseryProvider"
import { NurseryList } from "./nursery/NurseryList"
import { FlowerProvider } from "./flower/FlowerProvider"
import { DistributorProvider } from "./distributor/DistributorProvider"

export const ApplicationViews = (props) => {
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>

            <NurseryProvider>
                <FlowerProvider>
                    <DistributorProvider>
                        <Route exact path="/nurseries">
                            <NurseryList />
                        </Route>
                    </DistributorProvider>
                </FlowerProvider>
            </NurseryProvider>
            
            <Route exact path="/distributors">
                <></>
            </Route>

            <Route exact path="/retailers">
                <></>
            </Route>
        </>
    )
}
