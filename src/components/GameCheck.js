import { useState } from "react"

export default function GameCheck({game, checkboxChange}) {

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