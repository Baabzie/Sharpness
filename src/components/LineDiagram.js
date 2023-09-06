import React from "react"
// NOTE TO SELF: Found line under in a video at youtube, dont know why it is like that but will not get it to work without it.
import {Chart as ChartJS} from "chart.js/auto"
import { Line } from "react-chartjs-2"

  
export default function LineDiagram({lineData}) {
    return (
        <div>
            <Line data={lineData}/>
        </div>
    )
}