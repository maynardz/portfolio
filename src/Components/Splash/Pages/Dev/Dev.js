import React, { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import styles from './styles.module.css'

import { Tooltip, Button } from "@nextui-org/react";

import {
  useNavigate
} from "react-router-dom";

const Page = ({ offset, gradient, onClick, navigate }) => ( 
  <>
    <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
      <div className={styles.slopeBegin} />
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
      <div className={`${styles.slopeEnd} ${styles[gradient]}`} />
    </ParallaxLayer>

    <ParallaxLayer className={`${styles.text} ${styles.number} ${styles.parallax_dev_info}`} offset={offset} speed={0.3}>
      {
        offset === 0 ? (
          <div className={styles.parallax_dev_info_container}> 
            <span>
              0{offset + 1}
            </span>
            <div className={styles.parallax_dev_info} onClick={() => navigate('/dev/deep-seas')}>DeepSeas</div>
          </div>
        ) : offset === 1 ? (
          <div className={styles.parallax_dev_info_container} > 
            <span>
              0{offset + 1}
            </span>
            <div className={styles.parallax_dev_info} onClick={() => navigate('/dev/greene-street')}>Greene Street</div>
          </div>
        ) : offset === 2 ? (
          <div className={styles.parallax_dev_info_container}> 
            <span>
              0{offset + 1}
            </span>
            <div className={styles.parallax_dev_info} onClick={() => navigate('/dev/other')}>Other</div>
          </div>
        ) : <div></div>
      }
    </ParallaxLayer>
  </>
)

const Dev = props => {
  const parallax = useRef(null);
  const navigate = useNavigate();

  const [hint, setHint] = React.useState(true);
  const [mobileHint, setMobileHint] = React.useState(false);

  const scroll = (to) => {
    if (parallax.current) {
      parallax.current.scrollTo(to)
    }
  };

  React.useEffect(() => {
    updateHint();
  }, [hint]);
  
  const updateHint = () => {
    setTimeout(() => {
      setHint(!hint);
      setMobileHint(!mobileHint);
    }, 1500)
  }

  return (
    <div style={props.theme === 'light' ? {background: 'whitesmoke'} : props.theme === 'dark' ? {background: '#222'} : {} }>
      <p className={styles.dev_heading}>Development</p>
      <div className={styles.tooltip_container}>
        <Tooltip content={hint ? "use ← → to navigate" : mobileHint ? 'or scroll if on mobile' : ''}>
          <Button className={styles.tooltip_button} auto ghost>
            <p>?</p>
          </Button>
        </Tooltip>
      </div>
      <div style={{ background: '#dfdfdf' }}>
        <Parallax className={styles.parallax_container} ref={parallax} pages={3} horizontal>
          <Page offset={0} gradient="grey" onClick={() => scroll(1)} navigate={navigate} />
          <Page offset={1} gradient="grey" onClick={() => scroll(2)} navigate={navigate} />
          <Page offset={2} gradient="grey" onClick={() => scroll(0)} navigate={navigate} />
        </Parallax>
      </div>
    </div>
  )
};

export default Dev;