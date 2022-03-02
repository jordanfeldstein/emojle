import React, { useState, useEffect } from "react";
import Letter from "./Letter";
import checkGuess from "../checkGuess";
import Emoji from "./Emoji";

type GuessRowProps = {
    emojiName: string;
    correctEmojiName: string;
}

function getWidth(): number {
    return window.innerWidth;
}

function GuessRow(props: GuessRowProps) {
    const [windowWidth, setWindowWidth] = useState(getWidth());

    useEffect(() => {
        const resize = () => setWindowWidth(getWidth());
        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    }, []);

    const maxRowLetters = Math.floor((windowWidth-10)/40);

    const emojiLetters = props.emojiName.split("");
    const guessColors = checkGuess(props.emojiName, props.correctEmojiName);
    const letters = [];
    let allGray = true, allGreen = true;
    let rowCount = 1, columnCount = 1;
    for (let i = 0; i < emojiLetters.length; i++) {
        if (guessColors[i] !== "gray") allGray = false;
        if (guessColors[i] !== "green") allGreen = false;
        const curStyle = {
            gridColumnStart: columnCount,
            gridRowStart: rowCount
        };
        columnCount++;
        letters.push(<Letter color={guessColors[i]} key={i} size="small" letterStyle={curStyle}>{emojiLetters[i].toUpperCase()}</Letter>);
        if (emojiLetters[i] === " ") {
            rowCount++;
            columnCount = 1;
        } else if (columnCount > maxRowLetters) {
            rowCount++;
            columnCount = 2;
        }
    }

    const mainColor = allGray ? "gray" : (allGreen ? "green" : "yellow");
    const mainEmoji = Emoji.getChar(props.emojiName);
    const convEmoji = Emoji.toTwemoji(mainEmoji);

    return (
        <div className="Row">
            <span className="main-guess">
                <Letter color={mainColor} size="large">{convEmoji}</Letter>
            </span>
            <span className="small-guess">
                {letters}
            </span>
        </div>
    );
}

export default GuessRow;