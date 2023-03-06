import GameScreen from "./GameScreen";
import './WinnerScreen.css';
import happySponge from '../images/happy-sponge.png';
import {useEffect} from 'react';

const WinnerScreen = ({changeScreen}) => {
    useEffect(() => {

        const button = document.querySelector('button');

        const handleClick = () => {
            changeScreen(<GameScreen changeScreen={(e) => changeScreen(e)} initialBestScore={16}/>);
        };

        button.addEventListener('click', handleClick);
       

    });
  return (
    <div id='whole-winner-screen-container'>
        <h1 className='title-card-title'>YOU WON</h1>
          <img src={happySponge} alt="happy spongebob"/>
          <p>SCORE: 16</p>
          <p>BEST SCORE: 16</p>
          <button>Play Again</button>
    </div>
  );
};

export default WinnerScreen;