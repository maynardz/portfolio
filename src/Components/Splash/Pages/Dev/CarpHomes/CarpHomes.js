import React from 'react';
import './CarpHomes.css';

import webflow_icon from '../../../../../assets/images/webflow_icon.png';
import { Spinner } from 'grommet';

const CarpHomes = props => {

  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    let vid = document.querySelector('.video-tag');

    vid.addEventListener('loadeddata', () => {
      setLoaded(!loaded);
    })
  }, []);
  
  return (
    // <div style={ props.theme === 'light' ? {backgroundColor: 'whitesmoke', height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#222'} : props.theme === 'dark' ? {backgroundColor: '#222', height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'whitesmoke'} : {} }>
    //   This page should be finished soon. Check back in a bit!
    // </div>
    <div className='ch-container' style={ props.theme === 'light' ? {backgroundColor: 'whitesmoke', color: '#222'} : props.theme === 'dark' ? {backgroundColor: '#222', color: 'whitesmoke'} : {} } >
      <div>
        <p className='ch-heading'>CarpHomes</p>
        <div className='sw-container'>
          <hr className='style-line' style={ props.theme === 'light' ? {backgroundColor: '#222'} : props.theme === 'dark' ? {backgroundColor: 'whitesmoke'} : {}} />
          <div className='ds_icon_container'>
            {/* <img src={webflow_icon} style={{ height: '24px', width: 'auto'}} /> */}
            <box-icon color={'#737070'} name='react' type='logo'></box-icon>
            {/* <box-icon color={'#737070'} name='nodejs' type='logo' ></box-icon> */}
            {/* <box-icon color={'#737070'} name='postgresql' type='logo' ></box-icon> */}
            <box-icon color={'#737070'} name='javascript' type='logo' ></box-icon>
            <box-icon color={'#737070'} name='html5' type='logo'></box-icon>
            <box-icon color={'#737070'} name='css3' type='logo' ></box-icon>
          </div>
          <hr className='style-line' style={ props.theme === 'light' ? {backgroundColor: '#222'} : props.theme === 'dark' ? {backgroundColor: 'whitesmoke'} : {}} />
        </div>
      </div>
      
      <div className='ch-info-container'>
        <div className='content-container'>
          <p>Designed and developed a conversion-focused marketing site for a real-estate investor, built to support SEO goals and fast lead capture. Implemented a streamlined form flow with a dedicated “Thank You” conversion route, email notifications, and analytics instrumentation for tracking performance across campaigns. Delivered a responsive UI and content structure that emphasizes speed, discretion, and simplicity for homeowners seeking to sell quickly.</p> 
        </div>
        {
          loaded ? null : (
            <div style={{ display: 'flex', justifyContent: 'center'}}>
              <Spinner size='medium' color={props.theme === 'light' ? '#222' : props.theme === 'dark' ? 'whitesmoke' : ''} />
            </div>
          )
        }
        <div className='video-container'>
          <video className='video-tag' autoPlay loop muted style={loaded ? {height: '100%', width: '100%'} : { display: 'none' }}>
            <source src={'https://res.cloudinary.com/maynardz/video/upload/v1777053946/ch_demo_sy6uzn.mp4'} type='video/mp4'  />
          </video>
          <button style={ props.theme === 'light' ? {backgroundColor: '#222', color: 'whitesmoke', fontFamily: 'rejova', border: 'none', padding: '1em'} : props.theme === 'dark' ? {backgroundColor: 'whitesmoke', color: '#222', fontFamily: 'rejova', border: 'none', padding: '1em'} : {} }><a href='https://carphomes.net/' target='_blank' style={ props.theme === 'light' ? {color: 'whitesmoke'} : props.theme === 'dark' ? {color: '#222'} : {} }>Site</a></button>
        </div>
      </div>
    </div>
  )
}

export default CarpHomes;