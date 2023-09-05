import { useState } from "react";

export default function Anagram() {

    // Using React states to make an message an empty string, this will later change and tell us if our two words are anagrams or not.

    let [outputMessage, setOutputMessage] = useState("");

    //Function that will check if the two words are anagrams or not.

    const checkAnagram = (word1, word2) => {

        //For both words we turn every character into uppercase letters (so we can ignore if some characters are uppercase and some lowercase), the we split the characters in the strings up into arrays, sort the arrays (by alphabetical order) and then but the letters from the arrays back into a string.

        //Example 1: "dusty" becomes "DSTUY" and "study" also becomes "DSTUY".
        //Example 2: "Dusty" becomes "DSTUY" and "study" also becomes "DSTUY".
        //Example 3: "DUSTY" becomes "DSTUY" and "study" also becomes "DSTUY".

        // All of the above are anagrams (true) even if we mix upper- and lowercase letters.

        let firstSorterd = word1.toUpperCase().split('').sort().join('');
        let secondSorterd = word2.toUpperCase().split('').sort().join('');

        // If/else to set our "outputMessage" to tell us if the two words are anagrams or not.

        if (firstSorterd === secondSorterd) {
            setOutputMessage(`${word1} and ${word2} are anagrams!`)
        }
        else {
            setOutputMessage(`${word1} and ${word2} are NOT anagrams!`)
        }
    }

    return (
        <div>
            <p>Please enter two words to check if they are anagrams.</p>
            <input type="text" id="wordInput1" aria-label="Text input for the first word." placeholder="Word 1"/>
            <input type="text" id="wordInput2" aria-label="Text input for the second word." placeholder="Word 2"/>
            <button onClick={() => {
                let word1 = document.getElementById("wordInput1").value;
                let word2 = document.getElementById("wordInput2").value;
                checkAnagram(word1, word2);
            }}>Check</button>
            <p>{outputMessage}</p>
        </div>
    )
}