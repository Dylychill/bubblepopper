import React, {useEffect, useState} from 'react';
import './App.css';
import Bubble from './bubble.js';
import Instructions from './instructions.js';
import Sidebar from './sidebar';


function App(props) {
  // Start screen with instructions and a few bubbles, and then wait 15 seconds to start the game
  const [numBubbles, setNumBubbles] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("new bubble")
      return <Bubble onSend={setNumBubbles}></Bubble>
    }, 2000);
    //return () => clearInterval(interval);
  }, []);

  return <div className="App">
    <h1>BUBBLE POPPER</h1>
    <Bubble onSend={setNumBubbles}></Bubble>
    <Bubble onSend={setNumBubbles}></Bubble>
    <Sidebar num = {numBubbles}></Sidebar>
    <Instructions></Instructions>
  </div>
}

function StartGame() {
  console.log("start");


}

export default App;
