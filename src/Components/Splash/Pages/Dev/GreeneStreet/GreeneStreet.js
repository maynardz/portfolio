import React from 'react';
import './GreeneStreet.css';

import gs_demo from '../../../../../assets/video/gs_demo.mp4';

const GreeneStreet = props => {

  React.useEffect(() => {
    let video = document.querySelector('.video-tag');

    video.playbackRate = 2.5;
  }, []);

  return (
    <div className='gs-container' style={ props.theme === 'light' ? {backgroundColor: 'whitesmoke', color: '#222'} : props.theme === 'dark' ? {backgroundColor: '#222', color: 'whitesmoke'} : {} } >
      <div>
        <p className='gs-heading'>Greene Street</p>
        <div className='sw-container'>
          <hr className='style-line' style={ props.theme === 'light' ? {backgroundColor: '#222'} : props.theme === 'dark' ? {backgroundColor: 'whitesmoke'} : {}} />
          <div className='ds_icon_container'>
            <box-icon color={'#737070'} name='react' type='logo'></box-icon>
            <box-icon color={'#737070'} name='nodejs' type='logo' ></box-icon>
            <box-icon color={'#737070'} name='postgresql' type='logo' ></box-icon>
            <box-icon color={'#737070'} type='logo' name='aws'></box-icon>
          </div>
          <hr className='style-line' style={ props.theme === 'light' ? {backgroundColor: '#222'} : props.theme === 'dark' ? {backgroundColor: 'whitesmoke'} : {}} />
        </div>
      </div>
      
      <div className='gs-info-container'>
        <div className='content-container'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p> 
        </div>
        <div className='video-container'>
          <video className='video-tag' autoPlay loop muted style={{height: '100%', width: '100%'}}>
            <source src={gs_demo} type='video/mp4' />
          </video>
        </div>
      </div>
       
    </div>
  )
}

export default GreeneStreet;