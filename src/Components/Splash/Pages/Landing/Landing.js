import React from 'react';

import { useRef } from 'react';

import anime from 'animejs/lib/anime.es.js';
import Letterize from "letterizejs/lib/letterize.js";

import {
  useScroll,
  useTransform,
  animateValue
} from "framer-motion";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
};

const Landing = props => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  const targetList = new Letterize({
    targets: ".animate"
  });

  const [targets, setTargets] = React.useState(false);
  const [animationRef, setAnimationRef] = React.useState(anime);

  React.useEffect(() => {
    // console.log(targetList);
    setTargets(true);
  }, []);

  React.useLayoutEffect(() => {
    targets ? (
      setAnimationRef(
        anime.timeline({
        targets: targetList.listAll,
        delay: anime.stagger(100, {
          grid: [targetList.list[0].length, targetList.list.length],
          from: "center"
          }),
        loop: true
        }).add({
          scale: 0.5
        })
        .add({
          letterSpacing: "25px"
        })
        .add({
          scale: 1
        })
        .add({
          letterSpacing: "10px"
        })
      )
    ) : console.log('no targets');
  }, [targets]);

  return (
    <div>
      <div ref={ref}>
        <div className="animate">
            ZSM.DEV
        </div>
        <div className="animate">
            DEV.ZSM
        </div>
        <div className="animate">
            ZSM.DEV
        </div>
        <div className="animate">
            DEV.ZSM
        </div>
        <div className="animate">
            ZSM.DEV
        </div>
        <div className="animate">
            DEV.ZSM
        </div>
        <div className="animate">
            ZSM.DEV
        </div>
        <div className="animate">
            DEV.ZSM
        </div>
        <div className="animate">
            ZSM.DEV
        </div>
        <div className="animate">
            DEV.ZSM
        </div>
        <div className="animate">
            ZSM.DEV
        </div>
        <div className="animate">
            DEV.ZSM
        </div>
        <div className="animate">
            ZSM.DEV
        </div>
        <div className="animate">
            DEV.ZSM
        </div>
      </div>
      {/* <motion.h2 style={{ y }}>{`#00${props.id}`}</motion.h2> */}
    </div>
  )
};

export default Landing;