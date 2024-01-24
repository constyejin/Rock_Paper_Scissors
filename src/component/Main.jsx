import React from 'react'

const Main = (props) => {
  return (
    <div className='main-box-item'>
      <h2>{props.title}</h2>
      {
        props.item ? <img src={props.item.img} alt={props.item.name} /> : null
      }
      <p>{props.result}</p>
    </div>
  )
}

export default Main
