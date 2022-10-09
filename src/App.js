import React, {useState,useEffect} from 'react'
import './App.css';
import Card from './components/Card'
import Main from './components/Main'
import Socialİcon from './components/Socialİcon';
import Avatar from './components/Avatar';
import HeaderDesc from './components/HeaderDesc';
import Navbar from './components/Navbar'
import Footer from './components/Footer';

function App() {
  const [title,setTitle] = useState('Frontend Developer UI & UX Designer');
  const [darkMode,setDarkMode] = useState(false)
  useEffect( () => {
    if (window.innerWidth > 768){
      setTitle('Frontend Developer and UI & UX Designer')
    }
  },[title]);
  return (
    <div className={`App ${darkMode && 'dark'} sm:mb-80 md:mb-0 lg:mb-0`}>
      <main className='bg-white dark:bg-gray-900 px-10 pb-2 md:px-32 mx-auto'>
        <section className='min-h-screen w-full ml-auto'>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
          <HeaderDesc title={title}/>
          <Socialİcon/>
          <Avatar/>
        </section>
        <Card/>
        <Main/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
