import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { ThornsAndRoses } from "./components/ThornsAndRoses.js"
import "./index.css"

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <ThornsAndRoses />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
)