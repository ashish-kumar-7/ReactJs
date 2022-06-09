import './App.css';
import Navbar from './Components/Navbar';
import TextArea from './Components/TextArea';
import { useState } from 'react';

function App() {

  const [mode, setMode] = useState("light");

  const toggleFunction = () => {
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor="#035770"
    }
    else{
      setMode("light")
      document.body.style.backgroundColor="white"
    }
  }
  return (
    <>
    <Navbar title="TextUtils" theme={mode} toggle={toggleFunction} />
    <TextArea theme={mode} />
    </>
  );
}

export default App;
