import React from "react"
import "./Nursery.css"

export const NurseryCard = ({ nursery }) => (
    <section className="nursery">
        <h3 className="nursery__name">{nursery.name}</h3>
    </section>
)