export default function PuppyRadio({color, activeRadio, setActiveRadio, setActivePage}) {
    return (
        <div>
            <label htmlFor={color}>{color}</label>
            <input type="radio" id={color} name="color" value={color} checked={color === activeRadio} onChange={() => {
                setActiveRadio(color)
                setActivePage(1)}}/>
        </div>
    )
}