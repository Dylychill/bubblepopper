import React, {useState} from 'react';

function Sidebar(props) {
    // when the button is clicked, change the background color
    // This sidebar will always be on the screen

    // sidebar is off by 1. it doesnt count the first bubble popped
    return <div className="sidebar">
      <p className="num_bubbles">{props.num}</p>
      <h2>Bubbles Popped</h2>
      <p>Tap the bubbles to pop them.</p>
      <button onClick = {() => {}}
      >Change up the colors</button>

    </div>
}

export default Sidebar;