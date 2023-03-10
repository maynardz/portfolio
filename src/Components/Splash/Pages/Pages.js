import React from 'react';
import './Pages.css';

import About from './About/About';
import Contact from './Contact/Contact';
import Dev from './Dev/Dev';
import GraphicDesign from './GraphicDesign/GraphicDesign';
import Photography from './Photography/Photography';
import Landing from './Landing/Landing';

const Page = props => {

  return (
    props.id === 1 ? (
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <section id="splash_container" style={
          props.theme === 'light' ? {
            height: '100vh',
            width: '100vw',
            textAlign: 'center',
            lineHeight: 1.2,
            fontWeight: 400,
            fontFamily: 'rejova',
            fontSize: '2rem',
            backgroundColor: 'whitesmoke',
            color: '#222'
          } : props.theme === 'dark' ? {
            height: '100vh',
            width: '100vw',
            textAlign: 'center',
            lineHeight: 1.2,
            fontWeight: 400,
            fontFamily: 'rejova',
            fontSize: '2rem',
            backgroundColor: '#222',
            color: 'whitesmoke'
          } : {} 
        }>
          <Landing setPageNum={props.setPageNum} />
        </section>
      </div>
    ) : props.id === 2 ? (
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <section id='about_container' style={
          props.theme === 'light' ? {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
            boxSizing: 'border-box',
            margin: 0,
            textAlign: 'center',
            lineHeight: 1.2,
            fontWeight: 400,
            fontFamily: 'rejova',
            fontSize: '2rem',
            backgroundColor: 'whitesmoke',
            color: '#222'
          } : props.theme === 'dark' ? {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
            boxSizing: 'border-box',
            margin: 0,
            textAlign: 'center',
            lineHeight: 1.2,
            fontWeight: 400,
            fontFamily: 'rejova',
            fontSize: '2rem',
            backgroundColor: '#222',
            color: 'whitesmoke'
          } : {}
        }>
          <About setPageNum={props.setPageNum} />
        </section>
        {/* <motion.h2 style={{ y }}>{`#00${props.id}`}</motion.h2> */}
      </div>
    ) : props.id === 3 ? (
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <section id='dev_container' style={
          props.theme === 'light' ? {
            height: '100vh',
            width: '100vw',
            color: '#222'
          } : props.theme === 'dark' ? {
            height: '100vh',
            width: '100vw',
            color: 'whitesmoke'
          } : {}
        }>
          <Dev theme={props.theme} setPageNum={props.setPageNum} />
        </section>
      </div>
    ) : props.id === 4 ? (
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <section id='graphicDesign_container' style={
          props.theme === 'light' ? {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
            boxSizing: 'border-box',
            margin: 0,
            textAlign: 'center',
            lineHeight: 1.2,
            fontWeight: 400,
            fontFamily: 'rejova',
            fontSize: '2rem',
            backgroundColor: 'whitesmoke',
            color: '#222'
          } : props.theme === 'dark' ? {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
            boxSizing: 'border-box',
            margin: 0,
            textAlign: 'center',
            lineHeight: 1.2,
            fontWeight: 400,
            fontFamily: 'rejova',
            fontSize: '2rem',
            backgroundColor: '#222',
            color: 'whitesmoke'
          } : {}
        }>
          <GraphicDesign setPageNum={props.setPageNum} />
        </section>
      </div>
    ) : props.id === 5 ? (
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <section id='photography_container' style={
          props.theme === 'light' ? {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
            boxSizing: 'border-box',
            margin: 0,
            textAlign: 'center',
            fontFamily: 'rejova',
            backgroundColor: 'whitesmoke',
            color: '#222'
          } : props.theme === 'dark' ? {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
            boxSizing: 'border-box',
            margin: 0,
            textAlign: 'center',
            fontFamily: 'rejova',
            backgroundColor: '#222',
            color: 'whitesmoke'
          } : {}
        }>
          <Photography setPageNum={props.setPageNum} />
        </section>
      </div>
    ) : props.id === 6 ? (
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <section id='contact_container' style={
          props.theme === 'light' ? {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
            boxSizing: 'border-box',
            margin: 0,
            textAlign: 'center',
            fontFamily: 'rejova',
            backgroundColor: 'whitesmoke',
            color: '#222',
            fontSize: '2rem',
          } : props.theme === 'dark' ? {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
            boxSizing: 'border-box',
            margin: 0,
            textAlign: 'center',
            fontFamily: 'rejova',
            backgroundColor: '#222',
            color: 'whitesmoke',
            fontSize: '2rem',
          } : {}
        }>
          <Contact setPageNum={props.setPageNum} />
        </section>
      </div>
    ) : <div></div>
  )
}

export default Page;