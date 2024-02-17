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
        animateClass={data.animatClass}
        buttonText={data.buttonText}
        index={index}
      />
    );
  });
  const coinOneArray = new Array(5).fill(button[0]);
  const coinTwoArray = new Array(2).fill(button[1]);
  const coinThreeArray = new Array(2).fill(button[2]);
  const coinFourArray = new Array(2).fill(button[3]);
  const coinFiveArray = new Array(2).fill(button[4]);
  const coinSixArray = new Array(2).fill(button[5]);
  return (
    <div className={!props.animate.hideFund ? "bet" : `bet animate-fund`}>
      <div className="fund">
        <h4>Bank:$900</h4>
        <button>ALL IN</button>
      </div>
      <div className="stake">
        <ul key={1}>{coinOneArray}</ul>
        <ul key={1}>{coinTwoArray}</ul>
        <ul key={1}>{coinThreeArray}</ul>
        <ul key={1}>{coinFourArray}</ul>
        <ul key={1}>{coinFiveArray}</ul>
        <ul key={1}>{coinSixArray}</ul>
      </div>
    </div>
  );
}
