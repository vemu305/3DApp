import React from 'react';
import './App.css';
import  { useState } from 'react';


function App() {
  var [toggle, setToggle]=useState(true)
  var [change2D, setChange2D]=useState(true)

  const images = [
    { img: "./assets/images/img2(1).png", id: 1 },
    { img: "./assets/images/img2(2).png", id: 2 },
    { img: "./assets/images/img2(3).png", id: 3 },
    { img: "./assets/images/img2(4).png", id: 4 },
    { img: "./assets/images/img2(5).png", id: 5 },
    { img: "./assets/images/img2(6).png", id: 6 },
    { img: "./assets/images/img2(7).png", id: 7 },
    { img: "./assets/images/img2(8).png", id: 8 },
    { img: "./assets/images/img2(1).jpg", id: 9 },
    { img: "./assets/images/img2(2).jpg", id: 10 },
    { img: "./assets/images/img2(3).png", id: 11 },
    { img: "./assets/images/img2(4).png", id: 12 },
    { img: "./assets/images/img2(5).png", id: 13 },
    { img: "./assets/images/img2(6).png", id: 14 },
    { img: "./assets/images/img2(7).png", id: 15 },
    { img: "./assets/images/img2(8).png", id: 16 },
    { img: "./assets/images/img2(5).png", id: 17 },
    { img: "./assets/images/img2(6).png", id: 18 },
    { img: "./assets/images/img2(7).png", id: 19 },
    { img: "./assets/images/img2(8).png", id: 20 },


  ]
  
  function changethetheme(){
     
    setToggle(!toggle)
    setChange2D(!change2D)
    }
    function button2D(){
      setToggle(!toggle)
      setChange2D(!change2D)
    }
  return (
    <div>
     
    {toggle? <button class="btn btn-dark" onClick={button2D}>3D</button>: <button class="btn btn-dark" onClick={changethetheme}>2D</button>}
    {change2D?
          <div className='body'>
          <div className="slider">
            {
              images && images.map((item, index) => {
                return <span style={{ "--i": `${item.id}` }} key={index + 1}>
                  <img src={item.img} alt="" />
                </span>
              })}
          </div>
      </div> :  <div className='backgroundcolor'>
          {
            images.map((a,b)=>{
              return <img src={a.img} className="imgsize"/>
  
            })
          }
        </div>}

    

    </div>



  )
}

export default App;
