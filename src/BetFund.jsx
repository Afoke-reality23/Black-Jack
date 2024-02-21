import ButtonData from "./ButtonData";
import { useState } from "react";
import Coin from "./Coin";
export default function BetFund(props) {
  const [coin, setCoin] = useState(ButtonData);

  function betAll() {
    setCoin(coin.map((c) => ({ ...c, animate: true })));
    1;
  }
  const changePos = () => {
    console.log("i was clicked");
  };
  const button = coin.map((data, index) => {
    return (
      <Coin
        key={index}
        coinClass={data.buttonClass}
        coinStyle={data.btnBackground}
        borderClass={data.border}
        borderStyle={data.borderBg}
        buttonStyle={data.buttonBg}
        value={data.value}
        animate={data.animate}
        animateClass={data.animatClass}
        buttonText={data.buttonText}
        handleToggle={changePos}
      />
    );
    console.log(data.aniate);
  });
  const coinOneArray = new Array(6).fill(button[0]);
  const coinTwoArray = new Array(2).fill(button[1]);
  const coinThreeArray = new Array(2).fill(button[2]);
  const coinFourArray = new Array(2).fill(button[3]);
  const coinFiveArray = new Array(2).fill(button[4]);
  const coinSixArray = new Array(2).fill(button[5]);
  return (
    <>
      {props.children}
      {!props.bet && (
        <div className="bet">
          <div className="fund">
            <h4>Bank:${props.fundAmount}</h4>
            <button onClick={betAll}>ALL IN</button>
          </div>
          <div className="stake">
            <li onClick={(e) => props.fundBet(1)}>{coinOneArray}</li>
            <li onClick={(e) => props.fundBet(5)}>{coinTwoArray}</li>
          </div>
        </div>
      )}
    </>
  );
}
