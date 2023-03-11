import React from 'react';

const Other = props => {
  return (
    <div style={ props.theme === 'light' ? {backgroundColor: 'whitesmoke', height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'scroll', color: '#222'} : props.theme === 'dark' ? {backgroundColor: '#222', height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'scroll', color: 'whitesmoke'} : {} }>
      This page should be finished soon. Check back in a bit!
    </div>
  )
}

export default Other;