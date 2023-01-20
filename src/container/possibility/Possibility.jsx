import React from 'react'
import image from '../../assets/possibility.png'
import './possibility.css'

function Possibility() {
  return (
    <div className='whatCrypt__Possibility section__padding'>
      <div className="possibility__image ">
        <img src={image} alt="" />
      </div>
      <div className="possibility__content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>
          The Possibilites Are Beyond your Imaginations
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, a quasi cum voluptate nobis voluptas pariatur voluptatibus officiis ex beatae provident dolores inventore perferendis iste obcaecati laudantium? Vel, aspernatur minima.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility