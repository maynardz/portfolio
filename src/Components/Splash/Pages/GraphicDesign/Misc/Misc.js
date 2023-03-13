import React from 'react';
import './Misc.css';

import { IMAGES } from './IMAGES/Images';

const Misc = props => {
  return (
    <div style={{ height: 'auto', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
      <div className='misc-photo-container'>
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

export default Misc;