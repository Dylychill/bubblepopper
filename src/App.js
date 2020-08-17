import React, {useEffect, useState, useRef} from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './App.css';
import Bubble from './bubble.js';
import Instructions from './instructions.js';
import Sidebar from './sidebar';

function App(props) {
  // Start screen with instructions and a few bubbles, and then wait 15 seconds to start the game
  const [numBubbles, setNumBubbles] = useState(0)
  const inputRef = useRef()
  console.log(numBubbles + "in app")
  // if already played, set the number - runs on load once
  // useEffect(()=>{
  //   const storedNum = parseInt(localStorage.getItem('numBubbles'))
  //   if(storedNum) {
  //     setNumBubbles(storedNum)
  //   }
  // }, [])

  return <div ref={inputRef} className="App">
    <h1>BUBBLE POPPER</h1>
    <Bubble onSend={setNumBubbles}></Bubble>
    <Bubble onSend={setNumBubbles}></Bubble>
    <Bubble onSend={setNumBubbles}></Bubble>
    <Bubble onSend={setNumBubbles}></Bubble>
    <Sidebar theApp={inputRef} num = {numBubbles}></Sidebar>
    <Instructions></Instructions>
    <footer>
      <p>Nattoppet by DetektivbyrÃ¥n.mp3</p>
      <ReactAudioPlayer
        src="/music/Nattoppet_DetektivbyrÃ¥n.mp3"
        autoPlay
        controls
      />
    </footer>
  </div>
}

export default App;
