import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Routes from './components/Routes';
import { useState } from 'react';
import { Navbar } from './components/Navbar';

function App() {
  const [darkTheme, setDarkTheme] = useState(false)
  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className='bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen' >
        <div>
          <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme}/>
          <Routes/>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
