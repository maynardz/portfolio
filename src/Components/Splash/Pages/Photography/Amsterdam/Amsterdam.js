import React from 'react';
import './Amsterdam.css';

import { IMAGES } from './IMAGES/Images';

const Amsterdam = props => {
  return (
    <div style={ props.theme === 'light' ? {backgroundColor: 'whitesmoke', height: 'auto', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'scroll'} : props.theme === 'dark' ? {backgroundColor: '#222', height: 'auto', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'scroll'} : {} }>
      <div className='amsterdam-photo-container'>
        {
          IMAGES.map((img, index) => (
            <div key={index} className='img-container'>
              <img className='img' src={img.imageSrc} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Amsterdam;