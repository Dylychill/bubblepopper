import React, {useEffect, useState} from 'react';

function Bubble(props) {
  // the number of bubbles that has been clicked, but broken
  const [numBubbles, setNum] = useState(0)
  // determining the size of the bubble - will persist
  const [size] = useState(Math.floor((Math.random() * 251) + 50))
  // getting the position of the bubble - will persist
  const [horPos] = useState(Math.floor((Math.random() * window.innerWidth)))
  const [verPos] = useState(Math.floor((Math.random() * window.innerHeight)))
  // show will lend to the removal of the bubble when clicked
  const [show, setShow] = useState(true)

  // below useEffect runs on first load to see if the game has been played before
  // updates the number of bubbles pressed.
  useEffect(()=>{
      const storedNum = parseInt(localStorage.getItem('numBubbles'))
      if(storedNum) {
        setNum(storedNum)
        props.onSend(storedNum)
        console.log(props.onSend)
      }
    }, [])

  // get random location and size for a new bubble - only need to change width cuz it is a square
  // largest is should be is 300px by 300px and smallest is 50px
  // let size = Math.floor((Math.random() * 251) + 50);
  // // for position, get random top and left based on max
  // let height = 50;
  // let side = Math.floor((Math.random() * window.innerWidth));
  // console.log(side + "the side");
  // console.log(window.innerWidth + "window");

  return <div className="bubble" style={{top:verPos + "px", left: horPos + "px"}}>
    {show && <img style={{width:size + "px"}}
      onClick = {() => {
        props.onSend(numBubbles+1)
        setNum(numBubbles+1)
        localStorage.setItem("numBubbles", numBubbles+1)
        setShow(!show)
    }}
    src="/img/bubble.png" alt="a transparent, rainbow bubble"/>}
  </div>
}

// from Evan - unsure if i am gonna use this exactly
function SizeOfScreen(){
  const [width,setWidth] = useState(window.innerWidth)    // initial values = screen size
  const [height,setHeight] = useState(window.innerHeight)
  useEffect(()=>{
    window.addEventListener('resize', e=>{ // listen for screen size change events
      setWidth(e.target.innerWidth)
      setHeight(e.target.innerHeight)
    });
  },[])
  return <div style={{width,height}}></div> // declare the dimensions of the div
}

export default Bubble;