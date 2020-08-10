import React, {useState, useEffect} from 'react';

function Instructions() {
  const [show, setShow] = useState(true)
  // Runs on first load - sets a timer to hide the instructions after 5 seconds
  useEffect(()=>{
    setTimeout(()=> {setShow(!show)}, 5000)
  }, [])

  return <div>
    {show && <div className="instructions">
      <p>This is a musical bubble popping game!</p>
      <p>Click on the automatically generating bubbles to pop them and relax to music.</p>
      <p>You can change the color palette to the left.</p>
    </div>}
  </div>
}

export default Instructions;