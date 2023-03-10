import React from 'react';

const Other = props => {
  return (
    <div style={ props.theme === 'light' ? {backgroundColor: 'whitesmoke', height: 'auto', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'scroll'} : props.theme === 'dark' ? {backgroundColor: '#222', height: 'auto', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'scroll'} : {} }>
      Other
    </div>
  )
}

export default Other;