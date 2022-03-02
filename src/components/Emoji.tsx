import emojiJsonRaw from "../emojiOut.json";
import twemoji from "twemoji";

const emojiJson = emojiJsonRaw.map(j => {
    return {
        name: j.name.toLowerCase(),
        char: j.char
    }
});
const nameList = emojiJson.map(j => j.name+".");

const Emoji = {
    getChar: (name: string): string => {
        const res = emojiJson.find(e => (e.name+".").toLowerCase() === name.toLowerCase());
        if (!res) throw new Error("Emoji doesn't exist! " + name);
        return res.char;
    },
    toTwemoji: (char: string, options: Partial<twemoji.ParseObject>={}) => {
        if (!options.attributes) options.attributes = () => {return {loading: "lazy"}};
        const parsed = twemoji.parse(char, options);
        return (
            <span dangerouslySetInnerHTML={{__html: parsed}}/>
        );
    },
    randomEmoji: (): string => {
        const rand = Math.floor(Math.random()*emojiJson.length);
        return emojiJson[rand].name+".";
    },
    getNameList: (filter?: string): string[] => {
        if (!filter) return nameList;
        return nameList.filter(n => n.includes(filter));
    }
}

export default Emoji;