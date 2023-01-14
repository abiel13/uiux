import React from 'react'
import { Features } from '../../components'
import './what.css'

function WhatCrypt() {
  return (
    <div className='whatCrypt'>
<div className="whatCrypt__Feautures">
  <Features title={'What is CryptAi'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, aspernatur cumque ex nemo Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, aspernatur cumque ex nemo asperiores quaerat  asperiores quaerat.'} />
</div>
<div className="whatCrypt__heading">
  <h1 className='gradient__text'>The Possibilities Are Unimaginable</h1>
  <p >Explore Now</p>
</div>
<div className='whatCrypt__Features_Container'>
  <Features title={'ChatBot'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, aspernatur cumque ex nemo asperiores quaerat.'} />
  <Features title={'Education'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, aspernatur cumque ex nemo asperiores quaerat.'}/>
  <Features  title={'Design'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, aspernatur cumque ex nemo asperiores quaerat.'} />


</div>
    </div>
  )
}

export default WhatCrypt