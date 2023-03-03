import './App.css';
import gary from './images/gary.png';

const App = () => {
  return (
    <div id="whole-game-container">
      <div id="header">
        <h2>Memory Card Game</h2>
        <div id="score-board">
          <h4>Score: 0</h4>
          <h4>Best Score: 0</h4>
        </div>
      </div>
      <div id="game-body">
        <p>Choose a card, but do not choose the same one in the next round</p>
        <div id="grid-container">
          <div className="grid-tile">
            <img src={gary} alt="Gary the snail"/>
          </div>
          <div className="grid-tile"></div>
          <div className="grid-tile"></div>
          <div className="grid-tile"></div>
          <div className="grid-tile"></div>
          <div className="grid-tile"></div>
          <div className="grid-tile"></div>
          <div className="grid-tile"></div>
          <div className="grid-tile"></div>
          <div className="grid-tile"></div>
          <div className="grid-tile"></div>
          <div className="grid-tile"></div>
          <div className="grid-tile"></div>
          <div className="grid-tile"></div>
          <div className="grid-tile"></div>
          <div className="grid-tile"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
