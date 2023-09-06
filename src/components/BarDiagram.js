import React from "react"
// NOTE TO SELF: Found line under in a video at youtube, dont know why it is like that but will not get it to work without it.
import {Chart as ChartJS} from "chart.js/auto"
import { Bar} from "react-chartjs-2"

export default function BarDiagram({barData}) {
    return (
        <div>
            <Bar data={barData}/>
        </div>
    )
}