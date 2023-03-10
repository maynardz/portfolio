import React from 'react';
import './Pages.css';

import About from './About/About';
import Contact from './Contact/Contact';
import Dev from './Dev/Dev';
import GraphicDesign from './GraphicDesign/GraphicDesign';
import Photography from './Photography/Photography';
import Landing from './Landing/Landing';

const Page = props => {
  
  const updatePageNumber = () => {

  }

  return (
    props.id === 1 ? (
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <section id="splash_container" style={
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
          <Landing />
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
          <About />
        </section>
        {/* <motion.h2 style={{ y }}>{`#00${props.id}`}</motion.h2> */}
      </div>
    ) : props.id === 3 ? (
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <section id='dev_container' style={
          props.theme === 'light' ? {
            backgroundColor: 'whitesmoke',
            color: '#222'
          } : props.theme === 'dark' ? {
            backgroundColor: '#222',
            color: 'whitesmoke'
          } : {}
        }>
          <Dev />
        </section>
      </div>
    ) : props.id === 4 ? (
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <section id='graphicDesign_container' style={
          props.theme === 'light' ? {
            backgroundColor: 'whitesmoke',
            color: '#222'
          } : props.theme === 'dark' ? {
            backgroundColor: '#222',
            color: 'whitesmoke'
          } : {}
        }>
          <GraphicDesign theme={props.theme} />
        </section>
      </div>
    ) : props.id === 5 ? (
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <section id='photography_container' style={
          props.theme === 'light' ? {
            backgroundColor: 'whitesmoke',
            color: '#222'
          } : props.theme === 'dark' ? {
            backgroundColor: '#222',
            color: 'whitesmoke'
          } : {}
        }>
          <Photography />
        </section>
      </div>
    ) : props.id === 6 ? (
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <section id='contact_container' style={
          props.theme === 'light' ? {
            backgroundColor: 'whitesmoke',
            color: '#222'
          } : props.theme === 'dark' ? {
            backgroundColor: '#222',
            color: 'whitesmoke'
          } : {}
        }>
          <Contact />
        </section>
      </div>
    ) : <div></div>
  )
}

export default Page;