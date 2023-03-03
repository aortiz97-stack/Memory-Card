import './GameScreen.css'
import gary from '../images/gary.png';
import plankton from '../images/plankton.png';
import karen from '../images/karen.png';
import mrKrabs from '../images/mr_krabs.png';
import sandy from '../images/sandy.png';
import spongebob from '../images/spongebob.png';
import patrick from '../images/patrick.png';
import squidward from '../images/squidward.png';
import mrsPuff from '../images/mrs_puff.png';
import pearl from '../images/pearl.png';
import mermaidManBarnacleBoy from '../images/mermaid-man-barnacle-boy.png';
import theFlyingDutchman from '../images/the_flying_dutchman.png';
import larryTheLobster from '../images/larry_the_lobster.png';
import bubbleBass from '../images/bubble_bass.png';
import squilliam from '../images/squilliam.png';
import fred from '../images/fred.png';
import { useEffect, useState } from 'react';
import LoserScreen from './LoserScreen';

const GameScreen = () => {
  const images = [{image: gary, alt: "Gary the Snail", id:'gary'},
                  {image: plankton, alt: "Sheldon Plankton", id:'plankton'},
                  {image: karen, alt: "Computer Wife Karen", id:'karen'},
                  {image: mrKrabs, alt: "Mr. Krabs, owner of Krusty Krab", id:'mrKrabs'},
                  {image: sandy, alt: "Sandy Cheeks, the Texan Squirrel", id: 'sandy'},
                  {image: spongebob, alt: "Spongebob Squarepants, fry cook", id:'spongebob'},
                  {image: patrick, alt: "Patrick Star, best friend", id: 'patrick'},
                  {image: squidward, alt: "Squidward Tentacles, neighbor", id:'squidward'},
                  {image: mrsPuff, alt: "Mrs. Puff, boating school teacher", id:'mrsPuff'},
                  {image: pearl, alt: "Pearl, daughter of Mr. Krabs", id:'pearl'},
                  {image: mermaidManBarnacleBoy, alt: "Mermaid Man & Barnacle Boy, heroes", id:'mermaidManBarnacleBoy'},
                  {image: theFlyingDutchman, alt: "The Flying Dutchman, ghost", id:'theFlyingDutchman'},
                  {image: larryTheLobster, alt: "Larry the Lobster, beach hunk", id:'larryTheLobster'},
                  {image: bubbleBass, alt: "Bubble Bass, pickle hoarder", id:'bubbleBass'},
                  {image: squilliam, alt: "Squilliam Fancyson", id:'squilliam'},
                  {image: fred, alt: "Fred, my leg!", id:'fred'}]


  const [alreadyClicked, setAlreadyClicked] = useState([]);

  useEffect(
      () => {
        const gridContainer = document.querySelector('#grid-container');

        const setLoserScreen = () => {
        }
        const handleClick = (e) => {
          if (alreadyClicked.includes(e.target.id)) {
              setLoserScreen();
          } else {
            if (e.target.id !== 'grid-container' && e.target.id !== undefined && e.target.id !== "") {
                setAlreadyClicked(alreadyClicked.concat(e.target.id));
                console.log(`${e.target.id} was added to alreadyClicked`);
              }
          }
        };
        gridContainer.addEventListener('click', handleClick);

        return () => {gridContainer.removeEventListener('click', handleClick)};
      }, 
      [alreadyClicked]);

  return(
    <div id="whole-game-container">
    <div id="header">
      <h2>Memory Card Game</h2>
      <div id="score-board">
        <h4>Score: 0</h4>
        <h4>Best Score: 0</h4>
      </div>
    </div>
    <div id="game-body">
      <p>Choose a card, but do not choose the same one in the next round.</p>
      <div id="grid-container">
        <div className="grid-tile" id={images[0].id}>
            <img src={images[0].image} alt={images[0].alt} id={images[0].id}/>
        </div>
        <div className="grid-tile" id={images[1].id}>
       <img src={images[1].image} alt={images[1].alt} id={images[1].id}/>
        </div>
        <div className="grid-tile" id={images[2].id}>
        <img src={images[2].image} alt={images[2].alt} id={images[2].id}/>
        </div>
        <div className="grid-tile" id={images[3].id}>
            <img src={images[3].image} alt={images[3].alt} id={images[3].id}></img>
        </div>
        <div className="grid-tile" id={images[4].id}>
        <img src={images[4].image} alt={images[4].alt} id={images[4].id}></img>
        </div>
        <div className="grid-tile" id={images[5].id}>
        <img src={images[5].image} alt={images[5].alt} id={images[5].id}></img>
        </div>
        <div className="grid-tile" id={images[6].id}>
        <img src={images[6].image} alt={images[6].alt} id={images[6].id}></img>
        </div>
        <div className="grid-tile" id={images[7].id}>
        <img src={images[7].image} alt={images[7].alt} id={images[7].id}></img>
        </div>
        <div className="grid-tile" id={images[8].id}>
        <img src={images[8].image} alt={images[8].alt} id={images[8].id}></img>
        </div>
        <div className="grid-tile" id={images[9].id}>
        <img src={images[9].image} alt={images[9].alt} id={images[9].id}></img>
        </div>
        <div className="grid-tile" id={images[10].id}>
        <img src={images[10].image} alt={images[10].alt} id={images[10].id}></img>
        </div>
        <div className="grid-tile" id={images[11].id}>
        <img src={images[11].image} alt={images[11].alt} id={images[11].id}></img>
        </div>
        <div className="grid-tile" id={images[12].id}>
        <img src={images[12].image} alt={images[12].alt} id={images[12].id}></img>
        </div>
        <div className="grid-tile" id={images[13].id}>
        <img src={images[13].image} alt={images[13].alt} id={images[13].id}></img>
        </div>
        <div className="grid-tile" id={images[14].id}>
        <img src={images[14].image} alt={images[14].alt} id={images[14].id}></img>
        </div>
        <div className="grid-tile" id={images[15].id}>
        <img src={images[15].image} alt={images[15].alt} id={images[15].id}></img>
        </div>
      </div>
    </div>
  </div>
  );
};

export default GameScreen;