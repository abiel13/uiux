import React from "react";
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
import './header.css'

function Header() {
  return (
    <div>
      <div className="header" id="home">
        <div className="header__content">
          <h1 className="gradient__text">
            Lets Build Something Amazing with Crypt Ai
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            omnis veritatis eaque commodi. Laudantium autem ex atque reiciendis
            aperiam inventore quo commodi, libero impedit explicabo dignissimos
            aspernatur totam consequuntur dolorum dolore similique doloribus
            facere non.
          </p>
          <div className="header__input">
            <input type="text" placeholder="Input your Email Address" />
            <button>Get Started</button>
          </div>
          <div className="header__people">
            <img src={people} alt="" />
            <p>160 people asked for acess to the site</p>
          </div>
          

        </div>
<div className="header__ai">
            <img src={ai} alt="" />
          </div>
      </div>
    </div>
  );
}

export default Header;
