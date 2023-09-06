import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom"
import Anagram from "../Anagram";

describe("Running test on component Anagram.js", () => {
    // Before each test we render the Anagram componant.
    beforeEach(() => {
        render(<Anagram/>)
    })
    //Creates a setup function that returns variables used in both tests.
    const setup = () => {
        const word1Input = screen.getByTestId("wordInput1")
        const word2Input = screen.getByTestId("wordInput2")
        const anagramBtn = screen.getByTestId("anagramBtn")
        const outputMessage = screen.getByTestId("outputMessage")
        return {
            word1Input, word2Input, anagramBtn, outputMessage
        };
    }
    test("Testing if two words that are anagrams works as expected", async () => {

        // Deconstructing variables from setup.
        const {word1Input, word2Input, anagramBtn, outputMessage} = setup();


        await fireEvent.change(word1Input, {target:{value: "Tobias"}});
        await fireEvent.change(word2Input, {target:{value: "Saibot"}});
        
        await userEvent.click(anagramBtn);
        

        expect(word1Input.value).toBe("Tobias");
        expect(word2Input.value).toBe("Saibot");
        expect(outputMessage).toHaveTextContent("Tobias and Saibot are anagrams!");

    });
    test("Testing if two words that are NOT anagrams works as expected", async () => {

        const {word1Input, word2Input, anagramBtn, outputMessage} = setup();


        await fireEvent.change(word1Input, {target:{value: "Tobias"}});
        await fireEvent.change(word2Input, {target:{value: "Martin"}});
        
        await userEvent.click(anagramBtn);
        

        expect(word1Input.value).toBe("Tobias");
        expect(word2Input.value).toBe("Martin");
        expect(outputMessage).toHaveTextContent("Tobias and Martin are NOT anagrams!");

    })
})