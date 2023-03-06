import GameScreen from './components/GameScreen';
import './App.css';
import { useState, useEffect } from 'react';

const App = () => {
  const [currDisplay, setCurrDisplay] = useState();
  const initialBestScore = 0;

  useEffect(() => {
    setCurrDisplay(<GameScreen changeScreen={(e)=> setCurrDisplay(e)} initialBestScore={initialBestScore}/>)
  }, []);

  return (
    currDisplay
  );
}

export default App;
