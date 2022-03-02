import { useEffect, useRef } from "react";
import GuessRow from "./GuessRow"

type GuessContainerProps = {
    guesses: string[],
    correctEmojiName: string
}

function GuessContainer(props: GuessContainerProps) {
    const guessRows = props.guesses.map((g, i) => {
        return (
            <GuessRow key={i} emojiName={g} correctEmojiName={props.correctEmojiName}/>
        );
    });

    const myRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!myRef.current) return;
        myRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    });

    return (
        <div className="GuessContainer" ref={myRef}>
            <div>
                {guessRows}
            </div>
        </div>
    );
}

export default GuessContainer;