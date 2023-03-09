import React from 'react';
import './App.css';

import Splash from './Components/Splash/Splash';
import Iceland from './Components/Splash/Pages/Photography/Iceland/Iceland';
import Amsterdam from './Components/Splash/Pages/Photography/Amsterdam/Amsterdam';
import PuertoRico from './Components/Splash/Pages/Photography/PuertoRico/PuertoRico';

import {
  Routes,
  Route,
} from "react-router-dom";

function App() {  

  const [theme, setTheme] = React.useState('light');

  React.useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <div id="App" className={`App ${theme}`}>
      <Routes>
        <Route index element={
          <Splash
            theme={theme}
            setTheme={setTheme}
            toggleTheme={toggleTheme}
          />
        } />
        <Route path='photography/iceland' element={<Iceland theme={theme} />} />
        <Route path='photography/amsterdam' element={<Amsterdam theme={theme} />} />
        <Route path='photography/puerto-rico' element={<PuertoRico theme={theme} />} />
      </Routes>
      {/* <Splash theme={theme} setTheme={setTheme} toggleTheme={toggleTheme} /> */}
    </div>
  );
}

export default App;