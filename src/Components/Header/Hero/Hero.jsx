import React from 'react'
import bg from './../../../assets/BG.png'
import './Hero.css'
const Hero = () => {
  return (
    <div className='Hero'>
        <img  src={bg}>
        </img>
        <div className='title'>
            <p>
                "التسويق هو الاستخدام الابداعي للحقيقة"
            </p>
        </div>
    </div>
  )
}

export default Hero