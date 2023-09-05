export default function GameCheck({game, checkboxChange}) {
    return (
        <>
            <label htmlFor={game}>{game}</label>
            <input type="checkbox" value={game} onChange={() => {checkboxChange()}}></input>
        </>
    )
}