import React from 'react';
import './DeepSeas.css';

import ds_demo from '../../../../../assets/video/ds_demo.mp4';
import webflow_icon from '../../../../../assets/images/webflow_icon.png';

const DeepSeas = props => {
  return (
    <div style={ props.theme === 'light' ? {backgroundColor: 'whitesmoke', height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#222'} : props.theme === 'dark' ? {backgroundColor: '#222', height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'whitesmoke'} : {} }>
      This page should be finished soon. Check back in a bit!
    </div>
    // <div className='deepseas-container'>
    //   <div>
    //     <p className='deepseas-heading'>DeepSeas</p>
    //     <img src={webflow_icon} style={{ height: '24px', width: 'auto'}} />
    //     <box-icon color={'#737070'} name='javascript' type='logo' ></box-icon>
    //     <box-icon color={'#737070'} name='html5' type='logo'></box-icon>
    //     <box-icon color={'#737070'} name='css3' type='logo' ></box-icon>
    //   </div>
      
    //   <div className='video-container'>
    //     <video className='video-tag' autoPlay loop muted style={{height: '50%', width: '50%'}}>
    //       <source src={ds_demo} type='video/mp4' />
    //     </video>
    //   </div>
       
    // </div>
  )
}

export default DeepSeas;