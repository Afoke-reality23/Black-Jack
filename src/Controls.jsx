export default function Controls(props){
    return(
        <div className="controls">
            {!props.hidden.hideGamePart&& <div className="default-stake">
                <div className="border">
                    <button>100</button>
                </div>
            </div>}
           {props.hidden.hideGamePart &&<button className="play" onClick={props.handleClick}>PLAY</button>}
           {!props.hidden.hideGamePart && <button className="deal" onClick={props.onCardDisplay}>DEAL</button>} 
        </div>
    )
}