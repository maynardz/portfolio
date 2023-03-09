import React from 'react';
import styles from './styles.module.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const Page = ({ offset, gradient, onClick }) => (
  <>
    <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
      <div className={styles.slopeBegin} />
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
      <div className={`${styles.slopeEnd} ${styles[gradient]}`} />
    </ParallaxLayer>

    <ParallaxLayer className={`${styles.text} ${styles.number}`} offset={offset} speed={0.3}>
      <span>0{offset + 1}</span>
    </ParallaxLayer>
  </>
)

const Dev = props => {
  console.log(props);
  const parallax = React.useRef(null)

  const scroll = (to) => {
    if (parallax.current) {
      parallax.current.scrollTo(to)
    }
  }
  return (
    <div>
      <div>
        <Parallax className={styles.container} ref={parallax} pages={3} horizontal style={props.theme === 'light' ? {background: 'whitesmoke'} : props.theme === 'dark' ? {background: '#222'} : {} }>
          <Page offset={0} gradient={props.theme === 'light' ? 'light' : props.theme === 'dark' ? 'dark' : ''} onClick={() => scroll(1)} />
          <Page offset={1} gradient={props.theme === 'light' ? 'light' : props.theme === 'dark' ? 'dark' : ''} onClick={() => scroll(2)} />
          <Page offset={2} gradient={props.theme === 'light' ? 'light' : props.theme === 'dark' ? 'dark' : ''} onClick={() => scroll(0)} />
        </Parallax>
      </div>
    </div>
  )
};

export default Dev;