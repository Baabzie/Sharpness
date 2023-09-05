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

    //Creating an array with all the dates we have some data on. Using "Set" to remove duplicates.
    const availableDates = [...new Set(gameDataArray.map((data) => data.date))]
    //Crating variables for the first and the last date available.
    const minDate = availableDates[0];
    const maxDate = availableDates[availableDates.length - 1]

    //Function that in turn runs "setUserData" and sets that data to the games we want to show in the diagrams. The function is itself runned in the "checkboxChange()" function.
    //NOTE TO SELF: Try to make function work even if some games would miss data on dates. For instance data exist from an earlier date of one game than the other (probably seperate dates into other separate function).
    const activeGames = (games) => {
        let datasets = [];
        let newDates = [];
        games.forEach((game) => {
            let object = {
                label: game,
                data: [],
            }
            gameDataArray.forEach((datapoint, i) => {
                //Only runns if the data is from a game which checkbox is checked and only if the data is from within the timespan of selected dates.
                if (datapoint.game === game && (datapoint.date >= document.getElementById("beginningDateInput").value) && (datapoint.date <= document.getElementById("endingDateInput").value)) {
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

    //This function is runned every time someone changes one of the checkboxes, the min/max dates or first time "Problem 2"-page is started.
    const checkboxChange = () => {
        let checkboxArray = [];
        let form = document.getElementById("gamesCheckboxForm");
        let checkboxes = form.querySelectorAll('input[type=checkbox]');

        for (let i = 0; i < checkboxes.length; i++ ) {
            if (checkboxes[i].checked) {
                checkboxArray.push(checkboxes[i].value)
            }
        }
        //Runnes function with the selected games.
        activeGames(checkboxArray);
    }


    // When we enter the page "Problem 2" we will run "checkboxChange()" to get our diagram. By default every game is checked.
    //NOTE TO SELF: Having an error as the hook is empty. Want to run this ones when page is loaded (works) but should fix the error.
    useEffect(() => {
        checkboxChange();
    }, [])


    //A state with the data of the games that the diagrams should show. The "setUserData" is runned from "activeGames".
    const [userData, setUserData] = useState({
         labels: [],
         datasets: [],
     });


    //State that by default is "false", if "true" a bar chart is showned instead of the line chart. Is changed by a button rendered at the end of the HTML bellow.
    const [showBarDiagram, setShowBarDiagram] = useState(false);

    return (
        <div>
            <h3>Problem 2: Dashboard frontend</h3>
            <p>Please use the checkboxes to select the games you want to compare and use the date inputs to select min/max dates.</p>
            <form id="gamesCheckboxForm">
                {games.map((game, i) => {
                    return <GameCheck game={game} key={i} checkboxChange={checkboxChange}/>
                })}
                <br/>
                <input aria-label="Date input for starting date." id="beginningDateInput" type="date" min={minDate} max={maxDate} defaultValue={minDate} onChange={() =>{checkboxChange()}} ></input>
                <input aria-label="Date input for ending date." id="endingDateInput" type="date" min={minDate} max={maxDate} defaultValue={maxDate} onChange={() =>{checkboxChange()}}></input>
            </form>
            <div id="diagramDiv">
            {!showBarDiagram ? <LineDiagram lineData={userData}/> : <BarDiagram barData={userData}/>}
            </div>
            <button onClick={() => {setShowBarDiagram((prevState) => !prevState)}}>{!showBarDiagram ? "Show Bar Chart" : "Show Line Chart"}</button>
        </div>
    )
}