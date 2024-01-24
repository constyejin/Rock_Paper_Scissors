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
  const [comSelect, setComSelect] = useState(null);
  const [result, setResult] = useState("");
  const [comResult, setComResult] = useState("");

  const play = (userSelect) => {
    let userChoice = choice[userSelect]
    setUserSelect(userChoice);

    let computerChoice = randomChoice();
    setComSelect(computerChoice);

    let userResult = judgement(userChoice, computerChoice);
    setResult(userResult);

    setComResult(comJudgement(userResult))
  }

  const randomChoice = () => {
    let choiceArr = Object.keys(choice);
    let random = Math.floor(Math.random() * choiceArr.length);
    let final = choiceArr[random];
    return choice[final]
  }

  const judgement = (user, computer) => {
    // user.name == "Rock" / computer.name == "Scissors" => user WIN
    // user.name == "Rock" / computer.name == "Paper" => computerer WIN
    // user.name == "Scissors" / computer.name == "Paper" => user WIN
    // user.name == "Scissors" / computer.name == "Rock" => computerer WIN
    // user.name == "Paper" / computer.name == "Rock" => user WIN
    // user.name == "Paper" / computer.name == "Scissors" => computerer WIN
    // user.name == computer.name => TIE

    if(user.name == computer.name) {
      return "tie"
    } else if(user.name == "Rock") return computer.name == "Scissors" ? "win" : "lose"
    else if(user.name == "Rock") return computer.name == "Paper" ? "lose" : "win"
    else if(user.name == "Scissors") return computer.name == "Paper" ? "win" : "lose"
    else if(user.name == "Scissors") return computer.name == "Rock" ? "lose" : "win"
    else if(user.name == "Paper") return computer.name == "Rock" ? "win" : "lose"
    else if(user.name == "Paper") return computer.name == "Scissors" ? "lose" : "win"
  }

  const comJudgement = (result) => {
    return result == "win" ? "lose" : result == "tie" ? "tie" : "win";
  }

  comJudgement()
  return (
    <div className='wrapper'>
      <div className="main-box">
        <Score />
        <div className="main-box-list">
          <Main title="User" item={userSelect} result={result}/>
          <Main title="Computer" item={comSelect} result={comResult}/>
        </div>
        <Buttons play={play} choice={choice }/>
      </div>
    </div>
  );
}

export default App;
