import React, { useState } from "react";

export default function MainBody({ myStyle }) {
    const [text, setText] = useState('');
    const wordCount =
        text.trim() === "" ? 0 : text.trim().split(/\s+/).length

    const clearText = () => {
        setText("");
    }

    const handleUpperCase = () => {
        setText(text.toUpperCase());
    }

    const handleLowerCase = () => {
        setText(text.toLowerCase());
    }

    const handleCapital = () => {
        const capitalised = text.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
        setText(capitalised);
    }


    return (
        <>
            <div className="preview">
                <div className="input-elem">
                    <h1>Enter Your Text To Know About It </h1>
                    <textarea type="text" className="input-box" value={text} onChange={(e) => setText(e.target.value)}
                        style={{
                            backgroundColor: myStyle.backgroundColor === "black" ? "black" : " white",
                            color: myStyle.color === "white" ? "white" : "black"
                        }} ></textarea>
                </div>
                <div className="button-area">
                    <button onClick={clearText} className="btn clear-btn">Clear Text</button>
                    <button onClick={handleUpperCase} className="btn uppCase">Convert to Uppercase</button>
                    <button onClick={handleLowerCase} className="btn lowCase">Convert to Lowercase</button>
                    <button onClick={handleCapital} className="btn capital">Capitalze</button>
                </div>
                <div className="text-length">
                    <h4>Your  Text Summary</h4>
                    <p> {text.length} characters and {wordCount} word</p>
                    <h2>
                        Preview:
                    </h2>
                    <p>{text}</p>
                </div>
            </div>
        </>
    )
}