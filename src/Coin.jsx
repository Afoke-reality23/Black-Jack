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
        !ani
          ? `${props.coinClass} coin`
          : `${props.coinClass} coin animate-coin`
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
        <button style={{ background: props.buttonStyle }}>{props.value}</button>
      </div>
    </div>
  );
}
