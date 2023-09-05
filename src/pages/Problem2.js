import { useState } from "react";
import JSONData from "../assets/frontend-data-set.json"
import Diagram from "../components/Diagram";

export function Problem2() {

    let gameDataArray = [...JSONData]

    const [userData, setUserData] = useState({
         labels: gameDataArray.map((data) => data.date),
         datasets: [{
             label: "Active Users",
             data: gameDataArray.map((data) => data.activeUsers)
         }]
     })

     
    console.log(userData)

    return (
        <div>
            <h3>Problem 2: Dashboard frontend</h3>
            <Diagram lineData={userData}/>
        </div>
    )
}