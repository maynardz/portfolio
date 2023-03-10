import React from 'react';
import './styles.scss';

const GraphicDesign = props => {
  return (
    <div className='gd-container'>
      <div style={{textAlign: 'center'}}>
        <span style={ props.theme === 'light' ? { color: '#222' } : props.theme === 'dark' ? {color: 'whitesmoke'} : {} }>Graphic</span>
        <span style={ props.theme === 'light' ? { color: '#222'} : props.theme === 'dark' ? {color: 'whitesmoke'} : {} }>Design</span>
      </div>
     
      <div class="gd-card-container">
        <div class="card card0">
          <div class="border">
            <h4 id='gd-card-header'>Indianapolis AlleyCats</h4>
          </div>
        </div>
        <div class="card card1">
          <div class="border">
            <h4 id='gd-card-header'>Misc</h4>
          </div>
        </div>
      </div>
    </div>
  )
};

export default GraphicDesign;