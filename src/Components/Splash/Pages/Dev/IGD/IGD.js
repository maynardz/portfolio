import React from 'react';
import './IGD.css';

// import webflow_icon from '../../../../../assets/images/webflow_icon.png';
import { Spinner } from 'grommet';

const IGD = props => {

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
    <div className='igd-container' style={ props.theme === 'light' ? {backgroundColor: 'whitesmoke', color: '#222'} : props.theme === 'dark' ? {backgroundColor: '#222', color: 'whitesmoke'} : {} } >
      <div>
        <p className='igd-heading'>Indy Golf Den</p>
        <div className='sw-container'>
          <hr className='style-line' style={ props.theme === 'light' ? {backgroundColor: '#222'} : props.theme === 'dark' ? {backgroundColor: 'whitesmoke'} : {}} />
          <div className='ds_icon_container'>
            {/* <img src={webflow_icon} style={{ height: '24px', width: 'auto'}} /> */}
            <box-icon color={'#737070'} name='react' type='logo'></box-icon>
            <box-icon color={'#737070'} name='nodejs' type='logo' ></box-icon>
            <box-icon color={'#737070'} name='postgresql' type='logo' ></box-icon>
            <box-icon color={'#737070'} name='javascript' type='logo' ></box-icon>
            <box-icon color={'#737070'} name='html5' type='logo'></box-icon>
            <box-icon color={'#737070'} name='css3' type='logo' ></box-icon>
          </div>
          <hr className='style-line' style={ props.theme === 'light' ? {backgroundColor: '#222'} : props.theme === 'dark' ? {backgroundColor: 'whitesmoke'} : {}} />
        </div>
      </div>
      
      <div className='igd-info-container'>
        <div className='content-container'>
          <p>Built a full-stack booking platform for a private golf simulator studio, featuring real-time availability in 15-minute increments with automatic buffer enforcement. Integrated DocuSign for multi-participant digital waivers, Stripe Checkout + webhooks for payments, and automated email notifications for confirmations and access details. Designed and implemented the customer-facing UI and supporting admin workflows with a focus on mobile usability, reliability, and conversion.</p> 
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
            <source src={'https://res.cloudinary.com/maynardz/video/upload/v1777053274/IGD_demo_li34l6.mp4'} type='video/mp4'  />
          </video>
          <button style={ props.theme === 'light' ? {backgroundColor: '#222', color: 'whitesmoke', fontFamily: 'rejova', border: 'none', padding: '1em'} : props.theme === 'dark' ? {backgroundColor: 'whitesmoke', color: '#222', fontFamily: 'rejova', border: 'none', padding: '1em'} : {} }><a href='https://www.indygolfden.com/' target='_blank' rel="noreferrer" style={ props.theme === 'light' ? {color: 'whitesmoke'} : props.theme === 'dark' ? {color: '#222'} : {} }>Site</a></button>
        </div>
      </div>
    </div>
  )
}

export default IGD;