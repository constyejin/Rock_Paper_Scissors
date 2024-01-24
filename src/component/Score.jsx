import React from 'react'

const Score = (props) => {
  console.log(props)
  return (
    <div className='score-box'>
      <div className="score">
        <h3>Score</h3>
        <h3>{props.score.userScore}</h3>
        <h3>:</h3>
        <h3>{props.score.comScore}</h3>
      </div>
      <button>Reset</button>
    </div>
  )
}

export default Score
