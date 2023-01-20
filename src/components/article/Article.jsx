import React from 'react'
import './Article.css'

function Article({imgUrl ,date, title}) {
  return (
    <div className='whatCrypt__Article'>
      <div className="Article__image">
        <img src={imgUrl} alt="blog image" />
      </div>
      <div className="Article__content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
          <p>Read Full Article</p>
        </div>
      </div>
    </div>
  )
}

export default Article