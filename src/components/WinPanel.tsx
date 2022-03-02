
type WinPanelProps = {
    guessCount: number;
    restart: () => void;
    share: () => void;
}

export default function WinPanel(props: WinPanelProps) {

    return (
        <div className="Footer">
            <h1>You Won!</h1>
            <h3>in {props.guessCount} attempts</h3>
            <div className="DivButton TextButton" onClick={props.restart}>Restart</div>
            <div className="DivButton TextButton" onClick={props.share}>Share</div>
        </div>
    )
}