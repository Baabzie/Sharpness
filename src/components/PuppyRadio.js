// Creates a radio input. The input will set our active color (for puppies) in the application. When we change the color we also want the app to fetch the new data (with the color) starting on page one. Therefor it also changes "activePage()" to "1".
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