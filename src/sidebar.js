import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
// Button api from: https://material-ui.com/components/buttons/

function Sidebar(props) {
    // when the button is clicked, change the background color
    // This sidebar will always be on the screen

    // sidebar is off by 1. it doesnt count the first bubble popped
    return <div className="sidebar">
      <p className="num_bubbles">{props.num}</p>
      <h2>Bubbles Popped</h2>
      <p>Tap the bubbles to pop them.</p>
      <Button size="small" variant="contained" color="primary" onClick = {() => {
        console.log("change background image of app.js")
      }}>Change up the colors</Button>

    </div>
}

export default Sidebar;