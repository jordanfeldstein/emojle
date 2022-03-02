
function mapAdd<K>(mp: Map<K, number>, key: K, amt: number) {
    const val = mp.get(key);
    if (!val) {
        mp.set(key, amt);
        return;
    }
    mp.set(key, val+amt);
}

function hasNonzero<K>(mp: Map<K, number>, key: K): boolean {
    const val = mp.get(key);
    if (!val) return false;
    return val !== 0;
}

export default function checkGuess(guess: string, correct: string): string[] {
    const guessWords = guess.split(" ");
    const correctWords = correct.split(" ");

    const output = guessWords.map((word, ind) => {
        const wspl = word.split("");
        const arr = wspl.map(() => "gray");
        if (ind >= correctWords.length) {
            return arr;
        }
        const cspl = correctWords[ind].split("");
        const wmap = new Map<string, number>();
        const cmap = new Map<string, number>();

        // scan for greens
        for (let i = 0; i < wspl.length; i++) {
            if (i >= cspl.length) {
                mapAdd(wmap, wspl[i], 1);
                continue;
            }
            if (wspl[i] === cspl[i]) {
                arr[i] = "green";
                continue;
            }
            mapAdd(wmap, wspl[i], 1);
            mapAdd(cmap, cspl[i], 1);
        }
        for (let i = wspl.length; i < cspl.length; i++) {
            mapAdd(cmap, cspl[i], 1);
        }

        // scan for yellows
        for (let i = 0; i < wspl.length; i++) {
            if (arr[i] !== "gray") continue;
            if (hasNonzero(wmap, wspl[i]) && hasNonzero(cmap, wspl[i])) {
                arr[i] = "yellow";
                mapAdd(wmap, wspl[i], -1);
                mapAdd(cmap, wspl[i], -1);
            }
        }

        return arr;
    });

    // join words together with properly colored spaces
    // if space is green, then word is right length
    // if space is yellow, then word is wrong length
    // if space is gray, then there shouldn't be another word
    const concat: string[] = [];
    for (let i = 0; i < output.length; i++) {
        concat.push(...output[i]);
        if (i < guessWords.length-1) {
            if (i >= correctWords.length-1) {
                concat.push("gray");
                continue;
            }
            if (correctWords[i].length !== guessWords[i].length) {
                concat.push("yellow");
                continue;
            }
            concat.push("green");
            continue;
        }
    }

    // last word indicator

    return concat;
}