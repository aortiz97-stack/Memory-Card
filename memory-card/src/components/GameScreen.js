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
import { useState } from 'react';

const GameScreen = () => {
  const images = [{image: gary, alt: "Gary the Snail"},
                  {image: plankton, alt: "Sheldon Plankton"},
                  {image: karen, alt: "Computer Wife Karen"},
                  {image: mrKrabs, alt: "Mr. Krabs, owner of Krusty Krab"},
                  {image: sandy, alt: "Sandy Cheeks, the Texan Squirrel"},
                  {image: spongebob, alt: "Spongebob Squarepants, fry cook"},
                  {image: patrick, alt: "Patrick Star, best friend"},
                  {image: squidward, alt: "Squidward Tentacles, neighbor"},
                  {image: mrsPuff, alt: "Mrs. Puff, boating school teacher"},
                  {image: pearl, alt: "Pearl, daughter of Mr. Krabs"},
                  {image: mermaidManBarnacleBoy, alt: "Mermaid Man & Barnacle Boy, heroes"},
                  {image: theFlyingDutchman, alt: "The Flying Dutchman, ghost"},
                  {image: larryTheLobster, alt: "Larry the Lobster, beach hunk"},
                  {image: bubbleBass, alt: "Bubble Bass, pickle hoarder"},
                  {image: squilliam, alt: "Squilliam Fancyson"},
                  {image: fred, alt: "Fred, my leg!"}]
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
      <p>Choose a card, but do not choose the same one in the next round</p>
      <div id="grid-container">
        <div className="grid-tile">
            <img src={images[0].image} alt={images[0].alt}/>
        </div>
        <div className="grid-tile">
       <img src={images[1].image} alt={images[1].alt}/>
        </div>
        <div className="grid-tile">
        <img src={images[2].image} alt={images[2].alt}/>
        </div>
        <div className="grid-tile">
            <img src={images[3].image} alt={images[3].alt}></img>
        </div>
        <div className="grid-tile">
        <img src={images[4].image} alt={images[4].alt}></img>
        </div>
        <div className="grid-tile">
        <img src={images[5].image} alt={images[5].alt}></img>
        </div>
        <div className="grid-tile">
        <img src={images[6].image} alt={images[6].alt}></img>
        </div>
        <div className="grid-tile">
        <img src={images[7].image} alt={images[7].alt}></img>
        </div>
        <div className="grid-tile">
        <img src={images[8].image} alt={images[8].alt}></img>
        </div>
        <div className="grid-tile">
        <img src={images[9].image} alt={images[9].alt}></img>
        </div>
        <div className="grid-tile">
        <img src={images[10].image} alt={images[10].alt}></img>
        </div>
        <div className="grid-tile">
        <img src={images[11].image} alt={images[11].alt}></img>
        </div>
        <div className="grid-tile">
        <img src={images[12].image} alt={images[12].alt}></img>
        </div>
        <div className="grid-tile">
        <img src={images[13].image} alt={images[13].alt}></img>
        </div>
        <div className="grid-tile">
        <img src={images[14].image} alt={images[14].alt}></img>
        </div>
        <div className="grid-tile">
        <img src={images[15].image} alt={images[15].alt}></img>
        </div>
      </div>
    </div>
  </div>
  );
};

export default GameScreen;