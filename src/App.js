import { useState } from 'react';
import './App.css';
import Main from './component/Main';
import Score from './component/Score';
import Buttons from './component/Buttons';

const choice = {
  rock : {
    name : "Rock",
    img : "https://yun7420.github.io/rockscissorspaper-2023/static/media/rock.36e4f20e544680d5d7db.png",
  },
  scissors : {
    name : "Scissors",
    img : "https://yun7420.github.io/rockscissorspaper-2023/static/media/scissors.89d557044c485b55ba7c.png"
  },
  paper : {
    name : "Paper",
    img : "https://yun7420.github.io/rockscissorspaper-2023/static/media/paper.d7fa16464d6c5c437fc5.png"
  }
}

function App() {
  return (
    <div className='wrapper'>
      <div className="main-box">
        <Score />
        <div className="main-box-list">
          <Main />
        </div>
        <Buttons />
      </div>
    </div>
  );
}

export default App;
