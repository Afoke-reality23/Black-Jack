import { useState } from "react";
import Header from "./Header";
import Body from "./Body";
import Menu from "./Menu";
import Controls from "./Controls";
import GameCards from "./GameCards";
import BetFund from "./BetFund";
export default function App() {
  const [hideGamePart, setHideGamePart] = useState({
    gameCard: true,
    dealBtn: true,
    playBtn: false,
    bet: true,
    defStake: true,
  });
  function startGame() {
    setHideGamePart({
      ...hideGamePart,
      dealBtn: false,
      playBtn: true,
      bet: false,
      defStake: false,
    });
  }
  function displayCard() {
    setHideGamePart({
      ...hideGamePart,
      gameCard: false,
    });
    console.log(hideGamePart.gameCard);
  }
  const [betAmount, setBetAmount] = useState({
    stakeAmount: 0,
    fund: 900,
  });
  function funcStake(value) {
    setBetAmount({
      ...betAmount,
      stakeAmount: betAmount.stakeAmount + value,
      fund: betAmount.fund - value,
    });
  }
  return (
    <div>
      <Header />
      <Body>
        <Menu />
        <BetFund
          bet={hideGamePart.bet}
          fundBet={funcStake}
          fundAmount={betAmount.fund}
        >
          {!hideGamePart.gameCard && <GameCards />}
          <Controls
            betAmount={betAmount.stakeAmount}
            deal={hideGamePart.dealBtn}
            play={hideGamePart.playBtn}
            def={hideGamePart.defStake}
            playGame={startGame}
            display={displayCard}
          />
        </BetFund>
      </Body>
    </div>
  );
}
