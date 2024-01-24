import React from 'react'

const Score = (props) => {
  return (
    <div className='score-box'>
      <div className="score">
        <h3>Score</h3>
        <h3>{props.score.userScore}</h3>
        <h3>:</h3>
        <h3>{props.score.comScore}</h3>
      </div>
      <button onClick={() => {props.setScore(
        {
          userScore : 0,
          comScore : 0
        }
      )}}>Reset</button>
    </div>
  )
}

export default Score
