import React from "react";
import { Article } from "../../components";
import "./blog.css";
import {blog01 ,blog02, blog03, blog04, blog05} from './import'

function Blog() {
  return (
    <div className="whatCrypt__Blog section__padding">
      <div className="Blog__heading">
        <h1 className="gradient__text">
          There's a lot happening and we are blogging about it
        </h1>
      </div>
      <div className="Blog__container">
        <div className="Blog__container-groupA"><Article imgUrl={blog01}/></div>
        <div className="Blog__container-groupB">
          <Article imgUrl={blog02} date='September 13th 2020' title='explore the Crypt Ai Liabary . Crypt Ai is the Future'/>
           <Article imgUrl={blog03} date='September 13th 2020' title='explore the Crypt Ai Liabary . Crypt Ai is the Future'/> 
           <Article imgUrl={blog04} date='September 13th 2020' title='explore the Crypt Ai Liabary . Crypt Ai is the Future'/> 
           <Article imgUrl={blog05} date='September 13th 2020' title='explore the Crypt Ai Liabary . Crypt Ai is the Future'/>
        </div>
      </div>
    </div>
  );
}

export default Blog;
