import GameScreen from './components/GameScreen';
import './App.css';
import { useState, useEffect } from 'react';

const App = () => {
  const [currDisplay, setCurrDisplay] = useState();

  useEffect(() => {
    setCurrDisplay(<GameScreen changeScreen={(e)=> setCurrDisplay(e)}/>)
  }, []);

  return (
    currDisplay
  );
}

export default App;
