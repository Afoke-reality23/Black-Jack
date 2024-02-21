import { useState } from "react";
export default function Coin(props) {
  const [ani, setAni] = useState(props.animate);
  function changePos(e) {
    setAni((a) => !a);
  }
  return (
    <div
      className={
        !ani ? props.coinClass : `${props.coinClass} ${props.animateClass}`
      }
      style={{
        background: props.coinStyle,
      }}
    >
      <div
        className={props.borderClass}
        style={{
          border: props.borderStyle,
        }}
      >
        <button
          style={{ background: props.buttonStyle, color: props.buttonText }}
          onClick={changePos}
          value={props.value}
        >
          {props.value}
        </button>
      </div>
    </div>
  );
}
