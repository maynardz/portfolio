import React from 'react';
import './Iceland.css';

import { IMAGES } from './IMAGES/Images';

const Iceland = props => {
  return (
    <div style={{ height: 'auto', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className='iceland-photo-container'>
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

export default Iceland;