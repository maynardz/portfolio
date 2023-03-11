import React from 'react';
import './App.css';

import Splash from './Components/Splash/Splash';
import DeepSeas from './Components/Splash/Pages/Dev/DeepSeas/DeepSeas';
import GreeneStreet from './Components/Splash/Pages/Dev/GreeneStreet/GreeneStreet';
import Other from './Components/Splash/Pages/Dev/Other/Other';
import AlleyCats from './Components/Splash/Pages/GraphicDesign/AlleyCats/AlleyCats'
import Misc from './Components/Splash/Pages/GraphicDesign/Misc/Misc'
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
    // console.log(theme);
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
        <Route path='graphic-design/indianapolis-alleycats' element={<AlleyCats theme={theme} />} />
        <Route path='dev/deep-seas' element={<DeepSeas theme={theme} />} />
        <Route path='dev/greene-street' element={<GreeneStreet theme={theme} />} />
        <Route path='dev/other' element={<Other theme={theme} />} />
        <Route path='graphic-design/misc' element={<Misc theme={theme} />} />
        <Route path='photography/iceland' element={<Iceland theme={theme} />} />
        <Route path='photography/amsterdam' element={<Amsterdam theme={theme} />} />
        <Route path='photography/puerto-rico' element={<PuertoRico theme={theme} />} />
      </Routes>
    </div>
  );
}

export default App;