import { useState, useEffect } from "react";
import PuppyRadio from "../components/PuppyRadio";
import PuppyImage from "../components/PuppyImage";

export function Problem3() {

    //Array of all the colors of puppies we want to search for, and "All" as an option.
    const colorArray= ["All", "Brown", "White", "Red", "Yellow"];

    // What color that is selected, at start of page it is set to "All" but can be changed by radio-buttons.
    let [activeRadio, setActiveRadio] = useState("All");

    // What page of images are we fetching. At start of first page load it will be "1", it will change with the "prev"- and "next"-buttons and it will also revert back to "1" if we change color with the radio-buttons.
    let [activePage, setActivePage] = useState(1);
    
    // How many pages there is to fetch with the current search params. It's updated by the respone of the API. Mostly to know if there is a previous or next page from the current (activePage) we are viewing.
    let [totalPage, setTotalPage] = useState(0);

    // Just a state to show a error-paragraph if the API-fetch don't succeed. 
    let [errorTrue, setErrorTrue] = useState(false);

    // Function to fetch data.
    const getData = async () => {
        let activeColor = ``;
        if (activeRadio !== "All"){
            //This means that as long as the "activeRadio" isn't "All" our query params will be "`our color`-dog-puppies-", for instance: "brown-dog-puppies". It isn't perfect (sometimes fionds other things than dog puppies) but works better than "&color=brown" as that was more aboput the image color and not the dogs.
            activeColor = `${activeRadio.toLowerCase()}-`
        }
        try {
            let response = await fetch(`https://api.unsplash.com/search/photos?page=${activePage}&query=${activeColor}dog-puppies&client_id=${process.env.REACT_APP_ACCESS_KEY}`);
            let data = await response.json();
            setTotalPage(data.total_pages);
            handleData(data.results);
            setErrorTrue(false)
        } catch {
            setErrorTrue(true);
            setImageArray([]);
        }
    }
    
    // Array of the pictures being showed on the page. Changes by "handleData()" that itself is runned by getData();
    let [imageArray, setImageArray] = useState([]);


    // A function that creates objects with the images (and alt description) we got from "getData()" to put in a array and then replace the array "imageArray". 
    const handleData = (results) => {
        let array = [];
        results.forEach((result)=> {
            let object = {
                url: result.urls.thumb,
                alt: result.alt_description,
            }
            array.push(object);
        })
        setImageArray(array);
    }


    // Runs everytime teh first page is loaded, radio-buttons (colors) are changed or if we change (prev, next) what page we are on. This is when we want to fetch new data from the API.
    useEffect(() => {
        getData()
    }, [activeRadio, activePage])

    return (
        <div>
            <h3>Problem 3: Puppies</h3>
            <div id="puppySettingsDiv">
                <button disabled={activePage === 1} onClick={() => {setActivePage((prevState) => prevState -1)}}>Prev Page</button>
                <div id="puppyRadioDiv">
                    {colorArray.map((color, i) => {
                        return <PuppyRadio color={color} key={i} activeRadio={activeRadio} setActiveRadio={setActiveRadio} setActivePage={setActivePage} />
                    })}
                </div>
                <button disabled={activePage === totalPage} onClick={() => {setActivePage((prevState) => prevState +1)}}>Next Page</button>
            </div>
            {errorTrue && <p>There seems to be an error and the new images can't load.</p>}
            <div id="puppyImageDiv">
                {imageArray.map((imageObject, i) => {
                    return <PuppyImage {...imageObject} key={i}/>
                })}
            </div>
        </div>
    )
}