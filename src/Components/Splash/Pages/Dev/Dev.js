import React from 'react';

const Dev = props => {
  // console.log(props);
  
  return (
    <div style={props.theme === 'light' ? {background: 'whitesmoke'} : props.theme === 'dark' ? {background: '#222'} : {} }>
      Dev
    </div>
  )
};

export default Dev;