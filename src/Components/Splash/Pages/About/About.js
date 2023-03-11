import React from 'react';
import './About.css';

const About = props => {
  console.log(props);

  return (
    <div>
      <div>
        <p className='about-heading'>About</p>
      </div>
      <div className='about-info-container'>
        <div className='about-img-container'></div>
        <div className='about'>
          <div className='blurb'>
            Hi, my name is Zach.
          </div>
          <div className='skills-container'>
            <div className='skills-icons'>
              <box-icon color={props.theme === 'light' ? '#222' : 'whitesmoke'} name='html5' type='logo'></box-icon>
              <box-icon color={props.theme === 'light' ? '#222' : 'whitesmoke'} name='css3' type='logo' ></box-icon>
              <box-icon color={props.theme === 'light' ? '#222' : 'whitesmoke'} name='sass' type='logo' ></box-icon>
              <box-icon color={props.theme === 'light' ? '#222' : 'whitesmoke'} name='bootstrap' type='logo' ></box-icon>
              <box-icon color={props.theme === 'light' ? '#222' : 'whitesmoke'} name='javascript' type='logo' ></box-icon>
              <box-icon color={props.theme === 'light' ? '#222' : 'whitesmoke'} name='typescript' type='logo' ></box-icon>
              <box-icon color={props.theme === 'light' ? '#222' : 'whitesmoke'} name='react' type='logo'></box-icon>
              <box-icon color={props.theme === 'light' ? '#222' : 'whitesmoke'} name='nodejs' type='logo' ></box-icon>
              <box-icon color={props.theme === 'light' ? '#222' : 'whitesmoke'} name='postgresql' type='logo' ></box-icon>
              <box-icon color={props.theme === 'light' ? '#222' : 'whitesmoke'} name='graphql' type='logo' ></box-icon>
              <box-icon color={props.theme === 'light' ? '#222' : 'whitesmoke'} name='git' type='logo' ></box-icon>
              <box-icon color={props.theme === 'light' ? '#222' : 'whitesmoke'} name='github' type='logo' ></box-icon>
              <box-icon color={props.theme === 'light' ? '#222' : 'whitesmoke'} type='logo' name='firebase'></box-icon>
              <box-icon color={props.theme === 'light' ? '#222' : 'whitesmoke'} name='heroku' type='logo' ></box-icon>
              <box-icon color={props.theme === 'light' ? '#222' : 'whitesmoke'} name='figma' type='logo' ></box-icon>
              <box-icon color={props.theme === 'light' ? '#222' : 'whitesmoke'} name='adobe' type='logo' ></box-icon>            
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default About;