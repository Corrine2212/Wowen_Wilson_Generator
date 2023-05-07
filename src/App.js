import React from 'react';
import WowContainer from './containers/WowContainer'
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        {/* <h1>Wowen Wilson</h1> */}
        <a href=''><img className='logo' src="./1.png" alt="logo"></img></a>
      </header>
      <p id='description'>Get ready to experience the ultimate Owen Wilson “wow” extravaganza! This website is dedicated to all the times the actor has famously exclaimed his signature catchphrase.  With our API generator, you can now enjoy an endless supply of ‘wows’ that are sure to entertain and amuse. Whether you’re a fan of his movies or just love the meme-worthy catchphrase, we have something for everyone. So brace yourself for a wild ride and lets get wowing!</p>

      <WowContainer />

      <footer>
        <p>Powered by Seagulls</p>
        <p>&copy;  Wowen Wilson</p>
      </footer>
    </div>


  );
}

export default App;
