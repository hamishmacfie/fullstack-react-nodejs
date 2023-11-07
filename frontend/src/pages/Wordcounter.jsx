import { useState, useRef } from "react";

const Wordcounter = () => {
  const [inputText, setInputText] = useState("");
  const [wordCount, setWordcount] = useState();
  const inputField = useRef();

  const wordCounting = () => {
    // Remove the whitespace from the text
    const res = inputText.split(" ");
    // Filter the words and find the length of the array
    const result = res.filter((word) => word !== "").length;
    // Return the result
    setWordcount(result);
  };

  return (
    <div className="flex flex-col w-1/3 mx-auto">
      <h1>Wordcount</h1>
      <form>
        <input
          ref={inputField}
          type="text"
          className="p-2 border"
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          className="p-2 ml-2 text-white bg-red-600 rounded hover:bg-red-500"
          onClick={() => setInputText("")}
        >
          Clear
        </button>
      </form>

      {inputText ? (
        <p className="mt-3">{inputText}</p>
      ) : (
        <p className="mt-3">Sorry, there was no text to see</p>
      )}

      <button
        className="p-2 my-5 bg-green-200 rounded disabled:bg-gray-200"
        onClick={wordCounting}
        disabled={!inputText}
      >
        Calculate Words
      </button>

      {wordCount >= 2
        ? `There are ${wordCount} words in the sentence`
        : wordCount === 1
        ? `There is only ${wordCount} word in the entry`
        : "Please Enter some text and click Calculate"}
    </div>
  );
};

export default Wordcounter;
