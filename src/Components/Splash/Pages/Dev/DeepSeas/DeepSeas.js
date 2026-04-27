import React from 'react';
import './DeepSeas.css';

import webflow_icon from '../../../../../assets/images/webflow_icon.png';
import { Spinner } from 'grommet';

const DeepSeas = props => {

  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    let vid = document.querySelector('.video-tag');

    vid.addEventListener('loadeddata', () => {
      setLoaded(!loaded);
    })
  }, [loaded]);
  
  return (
    // <div style={ props.theme === 'light' ? {backgroundColor: 'whitesmoke', height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#222'} : props.theme === 'dark' ? {backgroundColor: '#222', height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'whitesmoke'} : {} }>
    //   This page should be finished soon. Check back in a bit!
    // </div>
    <div className='deepseas-container' style={ props.theme === 'light' ? {backgroundColor: 'whitesmoke', color: '#222'} : props.theme === 'dark' ? {backgroundColor: '#222', color: 'whitesmoke'} : {} } >
      <div>
        <p className='deepseas-heading'>DeepSeas</p>
        <div className='sw-container'>
          <hr className='style-line' style={ props.theme === 'light' ? {backgroundColor: '#222'} : props.theme === 'dark' ? {backgroundColor: 'whitesmoke'} : {}} />
          <div className='ds_icon_container'>
            <img src={webflow_icon} style={{ height: '24px', width: 'auto'}} alt="webflow icon" />
            <box-icon color={'#737070'} name='javascript' type='logo' ></box-icon>
            <box-icon color={'#737070'} name='html5' type='logo'></box-icon>
            <box-icon color={'#737070'} name='css3' type='logo' ></box-icon>
          </div>
          <hr className='style-line' style={ props.theme === 'light' ? {backgroundColor: '#222'} : props.theme === 'dark' ? {backgroundColor: 'whitesmoke'} : {}} />
        </div>
      </div>
      
      <div className='deepseas-info-container'>
        <div className='ds-content-container'>
          <p>Designed and developed a wide range of marketing and content-driven web experiences to support the launch and growth of DeepSeas, a managed cybersecurity services platform backed by Booz Allen Hamilton and Security On-Demand.</p> 
          <br/>
          <p>While I initially contributed to the public announcement page for the DeepSeas launch, my role quickly expanded into ongoing collaboration with both engineering and marketing teams. I led and supported the design and implementation of 50+ web pages, focusing on responsive layouts, improved user experience, and brand consistency across the site.</p>
          <br/>
          <p>My work included translating design concepts into production-ready front-end code, refining page structure and hierarchy for clarity, and optimizing performance and accessibility. I also partnered closely with designers to ensure visual alignment across landing pages, blog content, and supporting marketing materials.</p>
          <br/>
          {/* <p>In addition to development, I contributed to improving the overall maintainability of the site by helping establish reusable components and more scalable styling patterns.</p> */}
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
            <source src={'https://res.cloudinary.com/maynardz/video/upload/v1678980372/Photography/ds_demo_ntockc.mp4'} type='video/mp4'  />
          </video>
          <button style={ props.theme === 'light' ? {backgroundColor: '#222', color: 'whitesmoke', fontFamily: 'rejova', border: 'none', padding: '1em'} : props.theme === 'dark' ? {backgroundColor: 'whitesmoke', color: '#222', fontFamily: 'rejova', border: 'none', padding: '1em'} : {} }><a href='https://deepseas.webflow.io/' target='_blank' rel="noreferrer" style={ props.theme === 'light' ? {color: 'whitesmoke'} : props.theme === 'dark' ? {color: '#222'} : {} }>Site</a></button>
        </div>
      </div>
    </div>
  )
}

export default DeepSeas;