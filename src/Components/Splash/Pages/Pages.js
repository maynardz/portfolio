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
      <div>
        <section id="splash_container" style={
          props.theme === 'light' ? {
            textAlign: 'center',
            backgroundColor: 'whitesmoke',
            color: '#222'
          } : props.theme === 'dark' ? {
            textAlign: 'center',
            backgroundColor: '#222',
            color: 'whitesmoke'
          } : {} 
        }>
          <Landing />
        </section>
      </div>
    ) : props.id === 2 ? (
      <div>
        <section id='about_container' style={
          props.theme === 'light' ? {
            fontSize: '2rem',
            backgroundColor: 'whitesmoke',
            color: '#222'
          } : props.theme === 'dark' ? {
            backgroundColor: '#222',
            color: 'whitesmoke'
          } : {}
        }>
          <About theme={props.theme} />
        </section>
        {/* <motion.h2 style={{ y }}>{`#00${props.id}`}</motion.h2> */}
      </div>
    ) : props.id === 3 ? (
      <div>
        <section id='dev_container' style={
          props.theme === 'light' ? {
            backgroundColor: 'whitesmoke',
            color: '#222'
          } : props.theme === 'dark' ? {
            backgroundColor: '#222',
            color: 'whitesmoke'
          } : {}
        }>
          <Dev theme={props.theme} />
        </section>
      </div>
    ) : props.id === 4 ? (
      <div>
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
      <div>
        <section id='photography_container' style={
          props.theme === 'light' ? {
            backgroundColor: 'whitesmoke',
            color: '#222'
          } : props.theme === 'dark' ? {
            backgroundColor: '#222',
            color: 'whitesmoke'
          } : {}
        }>
          <Photography theme={props.theme} />
        </section>
      </div>
    ) : props.id === 6 ? (
      <div>
        <section id='contact_container' style={
          props.theme === 'light' ? {
            backgroundColor: 'whitesmoke',
            color: '#222'
          } : props.theme === 'dark' ? {
            backgroundColor: '#222',
            color: 'whitesmoke'
          } : {}
        }>
          <Contact theme={props.theme} />
        </section>
      </div>
    ) : <div></div>
  )
}

export default Page;