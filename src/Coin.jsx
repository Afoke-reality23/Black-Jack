import { useState } from "react";
export default function Coin(props) {
  const [ani, setAni] = useState(props.animate);
  console.log(ani);
  function changePos() {
    setAni((a) => !a);
  }
  return (
    <div
      onClick={changePos}
      className={
        !ani ? props.coinClass : `${props.coinClass} ${props.animateClass}`
      }
      style={{
        background: props.coinStyle,
        zIndex: index,
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
        >
          {props.value}
        </button>
      </div>
    </div>
  );
}
