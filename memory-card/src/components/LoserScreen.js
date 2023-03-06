import './LoserScreen.css';
import caveSponge from '../images/caveman-sponge.png'

const LoserScreen = () => {
    return (
      <div id='whole-loser-screen-container'>
          <h1 className='title-card-title'>YOU LOST</h1>
          <img src={caveSponge} alt="crying spongebob"/>
          <p>SCORE: 0</p>
          <p>BEST SCORE: 0</p>
          <button>Try Again</button>
      </div>
    );
};

export default LoserScreen;