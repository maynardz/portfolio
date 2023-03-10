import React from 'react'
import './GraphicDesign.scss';

import {
  useNavigate
} from "react-router-dom";

const GraphicDesign = props => {
  const navigate = useNavigate();

  return (
    <div className='gd-container'>
      <p className='gd-heading'>Graphic Design</p>
      <div className='gd-card-container'>
        <div className='gd-card-left' style={ props.theme === 'light' ? {color: 'whitesmoke'} : props.theme === 'dark' ? {color: 'whitesmoke'} : {} } onClick={() => navigate('graphic-design/indianapolis-alleycats')} >
          <p>Indianapolis AlleyCats</p>
        </div>
        <div className='gd-card-right' style={ props.theme === 'light' ? {color: '#222'} : props.theme === 'dark' ? {color: '#222'} : {} } onClick={() => navigate('graphic-design/misc')} >
          <p>Misc</p>
        </div>
      </div>
    </div>
  )
};

export default GraphicDesign;