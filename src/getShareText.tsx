import checkGuess from "./checkGuess";
import Emoji from "./components/Emoji";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getColors(guesses: string[], correct: string): string[] {
    const lines: string[] = [];
    guesses.forEach(g => {
        const chk = checkGuess(g, correct);
        let allGray = true, allGreen = true;
        for (let i = 0; i < chk.length; i++) {
            if (chk[i] !== "gray") allGray = false;
            if (chk[i] !== "green") allGreen = false;
            if (!allGray && !allGreen) break;
        }
        if (allGreen) lines.push("🟩");
        else if (allGray) lines.push("⬛");
        else lines.push("🟨");
    });
    return lines;
}

export default function getShareText(guesses: string[], correct: string): string {
    const lines = [`Emojile ${guesses.length}`];
    guesses.forEach(g => lines.push(Emoji.getChar(g) + " " + g));
    lines.push("https://vince7778.github.io/Emojile/");
    return lines.join("\n");
}