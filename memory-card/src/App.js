import GameScreen from './components/GameScreen';
import LoserScreen from './components/LoserScreen';
import { useState } from 'react';

const App = () => {
  const [currDisplay, setCurrDisplay] = useState(<GameScreen/>)
  return (
    <GameScreen/>
  );
}

export default App;
