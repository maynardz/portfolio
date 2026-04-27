import React, { useLayoutEffect, useRef } from 'react';
import './Landing.css';

import anime from 'animejs/lib/anime.es.js';
import Letterize from 'letterizejs/lib/letterize.js';

const Landing = () => {
  const ref = useRef(null);
  const animationRef = useRef(null);

  useLayoutEffect(() => {
    const targetList = new Letterize({
      targets: '.animate',
    });

    if (!targetList?.listAll?.length || !targetList?.list?.length) {
      console.log('no targets');
      return undefined;
    }

    animationRef.current = anime
      .timeline({
        targets: targetList.listAll,
        delay: anime.stagger(100, {
          grid: [targetList.list[0].length, targetList.list.length],
          from: 'center',
        }),
        loop: true,
      })
      .add({ scale: 0.5 })
      .add({ letterSpacing: '25px' })
      .add({ scale: 1 })
      .add({ letterSpacing: '10px' });

    return () => {
      if (animationRef.current) {
        animationRef.current.pause();
      }
    };
  }, []);

  return (
    <div style={{ marginLeft: '0.5em', marginTop: '-2.5em' }}>
      <div ref={ref}>
        <div className="animate">ZSM.DEV</div>
        <div className="animate">DEV.ZSM</div>
        <div className="animate">ZSM.DEV</div>
        <div className="animate">DEV.ZSM</div>
        <div className="animate">ZSM.DEV</div>
        <div className="animate">DEV.ZSM</div>
        <div className="animate">ZSM.DEV</div>
        <div className="animate">DEV.ZSM</div>
        <div className="animate">ZSM.DEV</div>
        <div className="animate">DEV.ZSM</div>
        <div className="animate">ZSM.DEV</div>
        <div className="animate">DEV.ZSM</div>
      </div>
    </div>
  );
};

export default Landing;