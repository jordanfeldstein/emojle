
type RulesPanelProps = {
    close: () => void;
}

export function RulesPanel(props: RulesPanelProps) {
    return (
        <div className="Footer">
            <h3>Rules</h3>
            <p>Like normal Wordle<br />
               Green means correct letter and correct place<br />
               Yellow means correct letter but incorrect place<br />
               Gray means incorrect letter<br />
               <br />
               Your emoji is compared word by word to the answer<br />
               Hints only indicate if letters appear within each word<br />
               Look at the spaces and period to determine the number of words<br />
               <br />
               Created by Vince7778
            </p>
            <div className="DivButton CloseButton CornerButton" onClick={props.close}>X</div>
        </div>
    )
}