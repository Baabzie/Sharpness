export default function PuppyRadio({color}) {
    return (
        <div>
            <label htmlFor={color}>{color}</label>
            <input type="radio" id={color} name="color" />
        </div>
    )
}