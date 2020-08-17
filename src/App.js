import React, {useEffect, useState, useRef} from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './App.css';
import Bubble from './bubble.js';
import Instructions from './instructions.js';
import Sidebar from './sidebar';


// Start screen with instructions and a few bubbles, and then wait 15 seconds to start the game
function App(props) {
  const [numBubbles, setNumBubbles] = useState(0) // the counter
  const inputRef = useRef()
  const [bubz, setBubz] = useState([true,true,true,true]) // bubbles themselves
  console.log(bubz + " the bubz")

  // if already played, set the number - runs on load once
  useEffect(()=>{
    setInterval(addBubble, 5000);
    addBubble();
    const storedNum = parseInt(localStorage.getItem('numBubbles'))
    if(storedNum) {
      setNumBubbles(storedNum)
    }
  }, [])

  // passed into Bubble component, called when clicked to remove the bubble and update counter
  function popBubble(i){
    const newBubz = [...bubz];
    newBubz[i] = false;
    setBubz(newBubz);
    setNumBubbles(numBubbles+1);
    localStorage.setItem("numBubbles", numBubbles+1);
  }
  function addBubble(){
    const newBubz = [...bubz];
    newBubz.push(true);
    setBubz(newBubz);
  }

  return <div ref={inputRef} className="App">
    <h1>BUBBLE POPPER</h1>
    {/* all the bubbles sent in the following map */}
    {bubz.map((b,i)=> <Bubble key={i} show={b} onPop={()=> popBubble(i)} />)}
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
