import React from 'react';
import './DeepSeas.css';

import ds_demo from '../../../../../assets/video/ds_demo.mp4';

const DeepSeas = props => {
  return (
    <div style={ props.theme === 'light' ? {backgroundColor: 'whitesmoke', height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'scroll', color: '#222'} : props.theme === 'dark' ? {backgroundColor: '#222', height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'scroll', color: 'whitesmoke'} : {} }>
      This page should be finished soon. Check back in a bit!
    </div>
    // <div style={ props.theme === 'light' ? {backgroundColor: 'whitesmoke', height: '100vh', width: '100vw', overflow: 'scroll', color: '#222'} : props.theme === 'dark' ? {backgroundColor: '#222', height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'scroll', color: 'whitesmoke'} : {} }>
    //   <div>
    //     <p className='deepseas-heading'>DeepSeas</p>
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