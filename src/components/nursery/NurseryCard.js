import React, { useContext, useEffect } from "react"
import "./Nursery.css"

export const NurseryCard = ({ nursery, flowers, distributors }) => (
        <section className="nursery">
            <h3 className="nursery__name">{nursery.name}</h3>
            <ul>
                {
                    nursery.nurseryFlowers.map(nf => {
                        const foundFlower = flowers.find(flower => {
                            return flower.id === nf.flowerId
                        })
                        return <li key={foundFlower.id}>{foundFlower.species}</li>
                    })
                }
            </ul>
            <ul>
                {
                    nursery.nurseryDistributors.map(nd => {
                        const foundDistributor = distributors.find(distributor => {
                            return distributor.id === nd.distributorId
                        })
                        return <li key={foundDistributor.id}>{foundDistributor.name}</li>
                    })
                }
            </ul>
        </section>
)
