import { useState, useEffect } from "react";
import JSONData from "../assets/frontend-data-set.json"
import LineDiagram from "../components/LineDiagram";
import BarDiagram from "../components/BarDiagram";
import GameCheck from "../components/GameCheck";

export function Problem2() {

    // Making a new array from the JSON-file Sharpness provided me with.
    // NOTE TO SELF: Why don't I have to convert it? Tought I would as it's a JSON-file but seems to be working. 
    let gameDataArray = [...JSONData]

    //Creating an array with names of the games we have data for. Using "Set" to remove duplicates.
    const games = [...new Set(gameDataArray.map((data) => data.game))]

    //Function that in turn runs "setUserData" and sets that data to the games we want to show in the diagrams.
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

    //This function is runned evertime someone changes one of the checkboxes.
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


    // When we enter the page "Problem 2" we will run "checkboxChange()" to get our diagram. By default every game is checked.
    //NOTE TO SELF: Having an error as the hook is empty. Want to run this ones when page is loaded (works) but should fix the error.
    useEffect(() => {
        checkboxChange();
    }, [])


    //The data of the games that the diagrams should show.
    const [userData, setUserData] = useState({
         labels: [],
         datasets: [],
     });

    const [showBarDiagram, setShowBarDiagram] = useState(false);

    return (
        <div>
            <h3>Problem 2: Dashboard frontend</h3>
            <p>Please use the checkboxes to select the games you want to compare.</p>
            <form id="gamesCheckboxForm">
                {games.map((game, i) => {
                    return <GameCheck game={game} key={i} checkboxChange={checkboxChange}/>
                })}
            </form>
            <div id="diagramDiv">
            {!showBarDiagram ? <LineDiagram lineData={userData}/> : <BarDiagram barData={userData}/>}
            </div>
            <button onClick={() => {setShowBarDiagram((prevState) => !prevState)}}>{!showBarDiagram ? "Show Bar Diagram" : "Show Line Diagram"}</button>
        </div>
    )
}