import React, {useEffect, useState} from 'react';
import './App.css';
import Bubble from './bubble.js';
import Instructions from './instructions.js';
import Sidebar from './sidebar';


function App(props) {
  // Start screen with instructions and a few bubbles, and then wait 15 seconds to start the game
  //setTimeout(StartGame, 15000) //Start the game after 15 seconds
  const [numBubbles, setNumBubbles] = useState(0)

  return <div className="App">
    <h1>BUBBLE POPPER</h1>
    <Bubble onSend={setNumBubbles}></Bubble>
    <Sidebar num = {numBubbles}></Sidebar>
    {/* <Bubble></Bubble>
    <Bubble></Bubble>
    <Bubble></Bubble>
    <Bubble></Bubble> */}
    <Instructions></Instructions>
  </div>
}

function StartGame() {

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('second');
    }, 1000);
    return () => clearInterval(interval);
  }, []);
}

export default App;
