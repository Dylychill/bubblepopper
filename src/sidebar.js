import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
// Button api from: https://material-ui.com/components/buttons/

// An array of possible background images
const images = ["url('/img/gradient_lavender.png')","url('/img/gradient_orange&pink.png')","url('/img/gradient_orange&yellow.png')","url('/img/gradient_reds&oranges.png')"]

// This sidebar will always be on the screen
function Sidebar(props) {
    return <div className="sidebar">
      <p className="num_bubbles">{props.num}</p>
      <h2>Bubbles Popped</h2>
      <p>Tap the bubbles to pop them.</p>
      <Button size="small" variant="contained" color="primary"
        onClick = {() => {
          // change the background image onclick randomly picking from the array above
          props.theApp.current.style.backgroundImage = images[Math.floor(Math.random() * images.length)]
        }
      }>Change up the colors</Button>

    </div>
}

export default Sidebar;