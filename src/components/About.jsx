import React from 'react';
import images from '../assets/GitHub-symbol.jpg'
import pic from '../assets/linkedIn_symbol.png'
import './About.css'

export default function About(){
    return (
        <div>
            <h2 style={{color: 'white'}}>Reach out to me:</h2>
            <div className='container'>
            <a href='https://github.com/marciadev'><img src={images}  width="120px" height="110px" alt='github-pic'/></a>
            </div>
            <div className='container'>
            <a href='https://www.linkedin.com/in/marciadev/'><img src={pic}  width="120px" height="110px" alt='linkedin-pic'/></a>
            </div>
        </div>
    )
}