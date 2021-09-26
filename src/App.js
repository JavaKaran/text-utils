import Navbar from './components/Navbar';
import React,{ useState } from 'react';
import TextForm from './components/TextForm';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

function App() {
  const[mode,setMode] = useState('light');

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#4C545A';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white'; 
    }
  }
  return (
    <div className="App">
      <Router>
        <Navbar toggleMode={toggleMode} mode={mode}/>
        <div className="container my-4">
          <TextForm mode={mode}/>
        </div>
      </Router>
    </div>
  );
}

export default App;
