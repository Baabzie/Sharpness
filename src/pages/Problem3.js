import PuppyRadio from "../components/PuppyRadio";

export function Problem3() {

    const colorArray= ["All", "Brown", "White", "Red", "Yellow"]

    const getData = async () => {
        let response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=puppy&color=black&client_id=${process.env.REACT_APP_ACCESS_KEY}`);
        let data = await response.json();
        console.log(data);
    }

    return (
        <div>
            <h3>Problem 3: Puppies</h3>
            <button onClick={() => {getData()}}>Test</button>
            <br/>
            <div id="radioDiv">
            {colorArray.map((color, i) => {
                return <PuppyRadio color={color} key={i} />
            })}
            </div>
        </div>
    )
}