import { useState, useEffect } from "react";
import JSONData from "../assets/frontend-data-set.json"
import LineDiagram from "../components/LineDiagram";
import GameCheck from "../components/GameCheck";

export function Problem2() {

    // Making a new array from the JSON-file Sharpness provided me with.
    // NOTE TO SELF: Why don't I have to convert it? Tought I would as it's a JSON-file but seems to be working. 
    let gameDataArray = [...JSONData]

    //Creating an array with names of the games we have data for. Using "Set" to remove duplicates.
    const games = [...new Set(gameDataArray.map((data) => data.game))]

    //NOTE TO SELF: Try to make function work even if some games would miss data on dates. For instance data exist from an earlier date of one game than the other (probably seperate dates into other separate function).
    const activeGames = (games) => {
        let datasets = [];
        let newDates = [];
        games.forEach((game) => {
            let object = {
                label: game,
                data: [],
            }
            gameDataArray.forEach((datapoint) => {
                if (datapoint.game === game) {
                    object.data.push(datapoint.activeUsers)
                    newDates.push(datapoint.date)
                }
            })
            datasets.push(object)
        })
        let dates = [...new Set(newDates)];
        setUserData({
            labels: dates,
            datasets,
        })
    }

    const checkboxChange = () => {
        let checkboxArray = [];
        let form = document.getElementById("gamesCheckboxForm");
        let checkboxes = form.getElementsByTagName("input");

        for (let i = 0; i < checkboxes.length; i++ ) {
            if (checkboxes[i].checked) {
                checkboxArray.push(checkboxes[i].value)
            }
        }
        activeGames(checkboxArray);
    }

    // useEffect(() => {
    //     activeGames(games);
    // }, [])

    const [userData, setUserData] = useState({
         labels: [],
         datasets: [],
     })

    return (
        <div>
            <h3>Problem 2: Dashboard frontend</h3>
            <p>Please use the checkboxes to select the games you want to compare.</p>
            <form id="gamesCheckboxForm">
                {games.map((game, i) => {
                    return <GameCheck game={game} key={i} checkboxChange={checkboxChange}/>
                })}
            </form>
            <LineDiagram lineData={userData}/>
        </div>
    )
}