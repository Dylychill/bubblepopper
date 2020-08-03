import React, {useEffect, useState} from 'react';

function Bubble(props) {
    const [numBubbles, setNumBubbles] = useState(0)
    // below useEffect runs on first load to see if the game has been played before
    // updates the number of bubbles pressed
    // useEffect(()=>{
    //     const storedNum = localStorage.getItem('numBubbles')
    //     if(storedNum) {
    //       setNumBubbles(storedNum)
    //       props.onSend(storedNum)
    //     }
    //   }, [])

    return <div style={{position:"absolute"}}>
        <img onClick = {() => {
            props.onSend(numBubbles)
            setNumBubbles(numBubbles+1)
            //localStorage.setItem("numBubbles", numBubbles)
        }}
        src="/img/bubble.png" alt="a transparent, rainbow bubble"/>
    </div>
}

export default Bubble;