import React from 'react';
import './About.css';

const About = props => {
  // console.log(props);

  const [name, setName] = React.useState('Zach');

  React.useEffect(() => {
    setTimeout(() => {
      name === 'Zach' ? setName('ザック') : setName('Zach');
    }, 5000)
  }, [name]);

  return (
    <div>
      <div>
        <p className='about-heading'>About</p>
      </div>
      <div className='about-info-container'>
        <div className='about-img-container'></div>
        <div className='about'>
          <div className='blurb'>
            <p className='blurb-heading' style={props.theme === 'light' ? {textShadow: '2px 1px 3px #222' } : props.theme === 'dark' ? { textShadow: '2px 1px 3px whitesmoke' } : {} }>Hi, my name is <span>{name}</span>.</p>
            <br/>
            <p className='blurb-body'>I'm a front-end web designer/developer & graphic artist based in Indianapolis, IN.</p>
            <p className='blurb-body'>Out of the office you'll find me spending time with my wife & our 3 dogs, weightlifitng, cooking, traveling, or playing disc golf - among other things.</p>
          </div>
          <div className='skills-container'>
            <div className='skills-icons'>
              <box-icon color={'#737070'} name='html5' type='logo'></box-icon>
              <box-icon color={'#737070'} name='css3' type='logo' ></box-icon>
              <box-icon color={'#737070'} name='sass' type='logo' ></box-icon>
              <box-icon color={'#737070'} name='bootstrap' type='logo' ></box-icon>
              <box-icon color={'#737070'} name='javascript' type='logo' ></box-icon>
              <box-icon color={'#737070'} name='typescript' type='logo' ></box-icon>
              <box-icon color={'#737070'} name='react' type='logo'></box-icon>
              <box-icon color={'#737070'} name='nodejs' type='logo' ></box-icon>
              <box-icon color={'#737070'} name='postgresql' type='logo' ></box-icon>
              <box-icon color={'#737070'} name='graphql' type='logo' ></box-icon>
              <box-icon color={'#737070'} name='git' type='logo' ></box-icon>
              <box-icon color={'#737070'} name='github' type='logo' ></box-icon>
              <box-icon color={'#737070'} name='firebase' type='logo' ></box-icon>
              <box-icon color={'#737070'} name='heroku' type='logo' ></box-icon>
              <box-icon color={'#737070'} name='figma' type='logo' ></box-icon>
              <box-icon color={'#737070'} name='adobe' type='logo' ></box-icon>            
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default About;