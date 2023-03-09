import React from 'react';
import './PuertoRico.css';

import { IMAGES } from './IMAGES/Images';

const PuertoRico = props => {
  return (
    <div style={ props.theme === 'light' ? {backgroundColor: 'whitesmoke', height: 'auto', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'scroll'} : props.theme === 'dark' ? {backgroundColor: '#222', height: 'auto', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'scroll'} : {} }>
      <div className='puertoRico-photo-container'>
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

export default PuertoRico;