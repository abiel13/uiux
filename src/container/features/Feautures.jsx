import React from "react";
import './Feautures.css';
import { Features } from "../../components";

function Feautures() {
const featureData =[{
  title:'Improving End Distrust Instantly',
  text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. At aut optio, repellendus vel totam iure?'
},
{
  title:'Becoming Very Active',
  text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. At aut optio, repellendus vel totam iure?'
}
,{
  title:'A New Revolution',
  text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. At aut optio, repellendus vel totam iure?'
},
{
  title:'Messaging or am Noting',
  text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. At aut optio, repellendus vel totam iure?'
}
]

  return (
    <div className="whatCrypt__Feautures section__padding " id='features'>  
      <div className="Feautures__heading">
        <h1 className="gradient__text">
          The Future is Now u just Need to realise it. Step into the future
          Today.
           </h1><p>Request Early Access to Get Started</p>
      </div>
      <div className="Feautures__features__container">
        {
          featureData.map((item,index) =>{
            return(<Features title={item.title} text={item.text} key={item.title + index} />)
          
          } )
        }
      </div>
    </div>
  );
}

export default Feautures;
