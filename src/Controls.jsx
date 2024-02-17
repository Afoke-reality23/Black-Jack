export default function Controls(props) {
  return (
    <div className="controls">
      {!props.hidden.hideGamePart && (
        <div className="default-stake" style={{ marginTop: "-1.3rem" }}>
          <div className="border">
            <button>100</button>
          </div>
        </div>
      )}
      {props.hidden.hideGamePart && (
        <button className="play" onClick={props.handleClick}>
          PLAY
        </button>
      )}
      {!props.hidden.hideGamePart && (
        <button className="deal" onClick={props.onCardDisplay}>
          DEAL
        </button>
      )}
    </div>
  );
}
