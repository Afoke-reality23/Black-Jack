import { useState } from "react";
export default function Controls(props) {
  return (
    <div className="controls">
      {!props.def && (
        <div className="def-stake-parent-div">
          <p className="stake-amount">${props.betAmount}</p>
          <div className="default-stake">
            <div className="border">
              <button>100</button>
            </div>
          </div>
        </div>
      )}

      {!props.play && (
        <button className="play" onClick={props.playGame}>
          PLAY
        </button>
      )}
      {!props.deal && (
        <button className="deal" onClick={props.display}>
          DEAL
        </button>
      )}
    </div>
  );
}
