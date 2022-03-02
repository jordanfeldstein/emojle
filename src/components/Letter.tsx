import React from "react";

interface GridStyle {
    gridColumnStart: number;
    gridRowStart: number;
}

type LetterProps = {
    color: string;
    size: string;
    letterStyle?: GridStyle;
    children: React.ReactNode;
}

function Letter (props: LetterProps) {
    let className = `Letter Letter-${props.color} Letter-${props.size}`;

    return (
        <div className={className} style={props.letterStyle}>
            {props.children}
        </div>
    );
}

export default Letter;