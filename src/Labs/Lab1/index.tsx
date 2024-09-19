import React from 'react';

export default function Lab1() {
  return (
    <div id="wd-lab1">
      <h2>Lab 1</h2>
      <h3>HTML Examples</h3>
      <div id="wd-h-tag"> ... </div>
      <div id="wd-p-tag"> ... </div>
      <div id="wd-images">
        <h4>Image tag</h4>
        Loading an image from the internet:
        <br />
        <img id="wd-starship"
          width="400px"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
        />
        <br />
        Loading a local image:
        <br />
        <img id="wd-teslabot" src="src/images/teslabot.jpg" height="200px" />
      </div>
    </div>
);}
