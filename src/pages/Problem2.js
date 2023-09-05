import { useState } from "react";
import JSONData from "../assets/frontend-data-set.json"
import Diagram from "../components/Diagram";

export function Problem2() {

    // Making a new array from the JSON-file Sharpness provided me with.
    // NOTE TO SELF: Why don't I have to convert it? Tought I would as it's a JSON-file but seems to be working. 
    let gameDataArray = [...JSONData]

    //Creating labels for our x-axis and using "Set" to remove duplicate dates. 
    const labels = [...new Set(gameDataArray.map((data) => data.date))];
    
    const games = [...new Set(gameDataArray.map((data) => data.game))]

    let datasets = [];

    games.forEach((game) => {
        let object = {
            label: game,
            data: [],
        }

        gameDataArray.forEach((datapoint) => {
            if (datapoint.game === game) {
                object.data.push(datapoint.activeUsers)
            }
        })
        datasets.push(object)
    })
    console.log(datasets)

    const [userData, setUserData] = useState({
         labels,
         datasets,
     })

    return (
        <div>
            <h3>Problem 2: Dashboard frontend</h3>
            <Diagram lineData={userData}/>
        </div>
    )
}