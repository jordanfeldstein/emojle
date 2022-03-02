import EmojiButton from "./EmojiButton";
import Emoji from "./Emoji";
import EmojiSearchBox from "./EmojiSearchBox";
import { useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";

type EmojiKeyboardProps = {
    filter?: string;
    onType: (emojiName: string) => void;
    openRules: () => void;
}

function EmojiKeyboard(props: EmojiKeyboardProps) {
    const [searchQuery, setSearchQuery] = useState(props.filter || "");
    const nameList = Emoji.getNameList(searchQuery);
    const buttons = nameList.map((n, i) => {
        return (
            <EmojiButton emojiName={n} click={s => props.onType(s)} key={i}></EmojiButton>
        )
    });

    useEffect(() => {
        ReactTooltip.hide();
        ReactTooltip.rebuild();
    });

    return (
        <div className="Footer">
            <div className="DivButton TextButton-small RulesButton" onClick={props.openRules}>Rules</div>
            <EmojiSearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            {buttons}
        </div>
    )
}

export default EmojiKeyboard;