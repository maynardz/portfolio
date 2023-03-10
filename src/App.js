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
  const [pageNum, setPageNum] = React.useState(1);

  React.useEffect(() => {
    document.body.className = theme;

    if (localStorage.getItem('theme')) {
      setTheme(localStorage.getItem('theme'));
    }
  }, [theme]);

  const updateLocalStorage = (theme) => {
    console.log(theme);
    if (theme === 'light') {
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  }

  return (
    <div id="App" className={`App ${theme}`}>
      <Routes>
        <Route index element={
          <Splash
            theme={theme}
            setTheme={setTheme}
            updateLocalStorage={updateLocalStorage}
            pageNum={pageNum}
            setPageNum={setPageNum}
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