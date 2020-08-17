import React, {useEffect, useState} from 'react';
import UIfx from 'uifx'
import audio from './Blop.mp3';

const beep = new UIfx(
  audio,
  {
    volume: 0.6, // number between 0.0 ~ 1.0
    throttleMs: 100
  }
)
// const beep = new UIFx({asset: audio});

function Bubble(props) {
  // determining the size of the bubble - will persist
  const [size] = useState(Math.floor((Math.random() * 251) + 50))
  // getting the position of the bubble - will persist
  const [horPos] = useState(Math.floor((Math.random() * window.innerWidth)))
  const [verPos] = useState(Math.floor((Math.random() * window.innerHeight)))
  // show will lend to the removal of the bubble when clicked
  const [show, setShow] = useState(true)

  return <div className="bubble" style={{top:verPos + "px", left: horPos + "px"}}>
    {show && <img style={{width:size + "px"}}
      onClick = {() => {
        props.onPop()
        setShow(!show)
        beep.play()
    }}
    src="/img/bubble.png" alt="a transparent, rainbow bubble"/>
    }
  </div>
}

export default Bubble;