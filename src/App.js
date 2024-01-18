import './App.css';
import Main from './component/Main';
import Score from './component/Score';
import Buttons from './component/Buttons';

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
