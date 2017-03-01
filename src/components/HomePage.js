import React from 'react';
import img from "../resource/image/darkSoul3.png"

const browerHeight = window.innerHeight;

const HomePage = () => {
  return (
    <div>
      <div style={{height: browerHeight - 48,display: 'inline-block'}}>
        <img style={{height: '100%'}} src={img}></img>
      </div>
      <div style={{display: 'inline-block',verticalAlign:'top'}}>
        <h1>黑暗之魂攻略进度</h1>

        <h2>黑魂1</h2>
        <ol>
          <li>刚打完灰太狼</li>
        </ol>
      </div>
    </div>
  );
};

export default HomePage;
