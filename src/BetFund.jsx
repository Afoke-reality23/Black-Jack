import ButtonData from "./ButtonData";
import { useState } from "react";
import Coin from "./Coin";
export default function BetFund(props) {
  const [coin, setCoin] = useState(ButtonData);
  const button = coin.map((data) => {
    return (
      <Coin
        key={data.value}
        coinClass={data.buttonClass}
        coinStyle={data.btnBackground}
        borderClass={data.border}
        borderStyle={data.borderBg}
        buttonStyle={data.buttonBg}
        value={data.value}
        animate={data.animate}
      />
    );
  });
  console.log(button);
  return (
    <div className={!props.animate.hideFund ? "bet" : `bet animate-fund`}>
      <div className="fund">
        <h4>Bank:$900</h4>
        <button>ALL IN</button>
      </div>
      <div className="stake">
        <ul style={{ display: "flex" }}>{button}</ul>
      </div>
    </div>
  );
}
