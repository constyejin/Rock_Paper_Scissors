import { useState } from 'react';
import './App.css';
import Main from './component/Main';
import Score from './component/Score';
import Buttons from './component/Buttons';

// Score (user, computer)
// 1. User와 Computer가 선택한 값을 비교해서 승부를 가린다. (win, lose, tie)
// 2. win하면 score + 1 시킨다.
// 3. 로컬스토리지에 값을 저장하고 Reset 버튼을 눌렀을 때 값을 초기화 시킨다.

// Main (User선택값, Computer 선택값)
// 1. Button값 중에 유저가 클릭한 값을 화면에 보여준다.
// 2. Computer 값은 세 값 중 하나가 랜덤으로 선택되게 한다.
// 3. 1,2번 값을 비교해서 승부를 가린다 (win, lose, tie)
// 4. 결과에 따라 win, lose, tie 글씨 컬러를 변경한다. (class 적용)

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
  const [userSelect, setUserSelect] = useState(null);

  const play = (userSelect) => {
    setUserSelect(choice[userSelect])
  }

  return (
    <div className='wrapper'>
      <div className="main-box">
        <Score />
        <div className="main-box-list">
          <Main title="User" item={userSelect}/>
          <Main title="Computer" item={userSelect}/>
        </div>
        <Buttons play={play} choice={choice }/>
      </div>
    </div>
  );
}

export default App;
