export default function GameCards() {
  return (
    <div className="cards">
      <div className="dealer-card">
        <ul className="game-cards dealer-card1">
          <li>6</li>
        </ul>
        <ul className="game-cards  dealer-card2">
          <li>7</li>
        </ul>
      </div>
      <div className="player-card">
        <ul className="game-cards player-card1">
          <li>1</li>
        </ul>
        <ul className="game-cards player-card2">
          <li>2</li>
        </ul>
      </div>
    </div>
  );
}
