import React from "react"
import {Chart as ChartJS} from "chart.js/auto"
import { Line } from "react-chartjs-2"

export default function Diagram({lineData}) {
    return (
        <Line data={lineData}/>
    )
}