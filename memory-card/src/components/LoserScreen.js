import './LoserScreen.css';
import cryingSpongeBob from '../images/crying-spongebob.png'

const LoserScreen = (() => {
    return (
      <div id='whole-loser-screen-container'>
          <image src={cryingSpongeBob} alt="crying spongebob"></image>
          <p>You've lost!</p>
          <p>Score: 0</p>
          <p>Best Score: 0</p>
          <button>Try Again</button>
      </div>
    );
})();

export default LoserScreen;