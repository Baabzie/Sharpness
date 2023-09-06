import { useState } from "react"

// Creates checkboxes for the games we want to see the data for. If the checkbox is changed in will run function "checkboxChange()" to only show the data for the games selected.
export default function GameCheck({game, checkboxChange}) {

    // By default our checkboxes are checked.
    const [checkboxChecked, setCheckboxChecked] = useState(true);

    return (
        <>
            <label htmlFor={game}>{game}</label>
            <input type="checkbox" value={game} checked={checkboxChecked} onChange={() => {
                checkboxChange();
                setCheckboxChecked((prevState) => !prevState)
                }}></input>
        </>
    )
}