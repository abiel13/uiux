import React from 'react'
import './features.css'

function Features({text , title}) {
  return (
    <div className='whatCrypt__Features'>
      <div className='whatCrypt__Features__title'>
        <div />
        <h1>{title}</h1>
      </div>
      <div className='whatCrypt__Features__text'>
        <div>{text}</div>
      </div>
    </div>
  )
}

export default Features