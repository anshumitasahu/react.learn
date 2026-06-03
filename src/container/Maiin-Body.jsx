import React, { useState } from "react";

export default function MainBody() {
    const [text, setText] = useState('');
    const wordCount =
        text.trim() === "" ? 0 : text.trim().split(/\s+/).length

    return (
        <>
            <div className="preview">
                <div className="input-elem">
                    <h1>Enter Your Text To Know About It </h1>
                    <textarea type="text" className="input-box" value={text} onChange={(e) => setText(e.target.value)}></textarea>
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