import React from 'react';
import './Splash.css';

// import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,  
} from "framer-motion";

import { Grid, Switch } from "@nextui-org/react";

import Pages from './Pages/Pages';

const Splash = props => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div>
      <>
        {
          [1, 2, 3, 4, 5, 6].map((page, index) => ( 
            <Pages key={index} id={page} theme={props.theme} setPageNum={props.setPageNum} />
          ))
        }
        <motion.div className="progress" style={ props.theme === 'light' ? {scaleX, position: 'fixed', left: 0, right: 0, height: '5px', background: '#222', bottom: '100px'} : props.theme === 'dark' ? {scaleX, position: 'fixed', left: 0, right: 0, height: '5px', background: 'whitesmoke', bottom: '100px'} : {} } />
      </>
      <footer style={ props.theme === 'light' ? {display: 'flex', justifyContent: 'space-between', backgroundImage: 'radial-gradient(rgba(34, 34, 34, 0) 1px, whitesmoke 1px)'} : props.theme === 'dark' ? {display: 'flex', justifyContent: 'space-between', backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0) 1px, #222 1px)'} : {} }>
        
        <button>
          <p>ZSM.DEV</p>
        </button>
        {/* <button onClick={toggleTheme}>Toggle Theme</button> */}
        <Grid>
          <Switch
            onChange={() => props.updateLocalStorage(props.theme)}
            checked={props.theme === 'light' ? false : true}
            size="xl"
            iconOn={<box-icon type='solid' name='moon'></box-icon>}
            iconOff={<box-icon name='sun' type='solid' ></box-icon>}
          />
        </Grid>

        {/* <button>
          <p>00.{props.pageNum}</p>
        </button> */}
        
      </footer>
    </div>
  )
}

export default Splash;