import React from 'react';
import './GreeneStreet.css';

import webflow_icon from '../../../../../assets/images/webflow_icon.png';
import { Spinner } from 'grommet';

const GreeneStreet = props => {

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
    <div className='gs-container' style={ props.theme === 'light' ? {backgroundColor: 'whitesmoke', color: '#222'} : props.theme === 'dark' ? {backgroundColor: '#222', color: 'whitesmoke'} : {} } >
      <div>
        <p className='gs-heading'>Greene Street</p>
        <div className='sw-container'>
          <hr className='style-line' style={ props.theme === 'light' ? {backgroundColor: '#222'} : props.theme === 'dark' ? {backgroundColor: 'whitesmoke'} : {}} />
          <div className='gs_icon_container'>
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
      
      <div className='gs-info-container'>
        <div className='content-container'>
          <p>Custom PERN stack (postgreSQL, Express, React, Node) web application built for a medical cannabis start-up based in West Virginia. Integrated file uplaod with multer and AWS S3. Automated mailing with nodemailer, handlebars, and Google Workspace. Google Maps API integration. Integrated Ecommerce and Point of Sales systems provided by Dutchie. Application routing with React Router DOM.</p>
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
            <source src={'https://res.cloudinary.com/maynardz/video/upload/v1684346504/gs_demo_nam3w1.mp4'} type='video/mp4'  />
          </video>
          <button style={ props.theme === 'light' ? {backgroundColor: '#222', color: 'whitesmoke', fontFamily: 'rejova', border: 'none', padding: '1em'} : props.theme === 'dark' ? {backgroundColor: 'whitesmoke', color: '#222', fontFamily: 'rejova', border: 'none', padding: '1em'} : {} }><a href='https://dreamgreene.com' target='_blank' style={ props.theme === 'light' ? {color: 'whitesmoke'} : props.theme === 'dark' ? {color: '#222'} : {} }>Site</a></button>
        </div>
      </div>
    </div>
  )
}

export default GreeneStreet;