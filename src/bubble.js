import React, {useEffect, useState} from 'react';

function Bubble(props) {
    const [numBubbles, setNumBubbles] = useState(0)
    // below useEffect runs on first load to see if the game has been played before
    // updates the number of bubbles pressed
    // BROKEN - not adding, it's doing strng concat, to string may work
  // useEffect(()=>{
  //     const storedNum = localStorage.getItem('numBubbles')
  //     if(storedNum) {
  //       setNumBubbles(storedNum)
  //       props.onSend(storedNum)
  //     }
  //   }, [])

  // get random location and size for a new bubble - only need to change width cuz it is a square
  // largest is should be is 300px by 300px and smallest is 50px
  let size = Math.floor((Math.random() * 251) + 50);
  // for position, get random top and left based on max
  let height = 50;
  let side = Math.floor((Math.random() * window.innerWidth));
  // console.log(side + "the side");
  // console.log(window.innerWidth + "window");

  return <div className="bubble" style={{top:height + "px", left: side + "px"}}>
    <img style={{width:size + "px"}}
      onClick = {() => {
        props.onSend(numBubbles)
        setNumBubbles(numBubbles+1)
        localStorage.setItem("numBubbles", numBubbles)
    }}
    src="/img/bubble.png" alt="a transparent, rainbow bubble"/>
  </div>
}

export default Bubble;