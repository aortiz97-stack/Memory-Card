import GameScreen from './GameScreen';
import './LoserScreen.css';
import caveSponge from '../images/caveman-sponge.png'
import {useEffect} from 'react';


const LoserScreen = ({score, bestScore, setBestScore, changeScreen}) => {

    useEffect(() => {
        if (score > bestScore) {
            setBestScore(score);
        }

        const button = document.querySelector('button');

        const handleClick = () => {
          changeScreen(<GameScreen changeScreen={(e) => changeScreen(e)}/>);
        };

        button.addEventListener('click', handleClick);
       

    }, []);

    return (
      <div id='whole-loser-screen-container'>
          <h1 className='title-card-title'>YOU LOST</h1>
          <img src={caveSponge} alt="crying spongebob"/>
          <p>SCORE: {score}</p>
          <p>BEST SCORE: {bestScore}</p>
          <button>Try Again</button>
      </div>
    );
};

export default LoserScreen;