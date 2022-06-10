import "./App.css";
import Navbar from "./Components/Navbar";
import TextArea from "./Components/TextArea";
import About from "./Components/About";
import Alert from "./Components/Alert";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setalert] = useState(null);

  const showAlert = (type,message) => {
    setalert({
      message:message,
      type: type
    })
    setTimeout(()=>{
      setalert(null);
    }, 1500);
  };

  const toggleFunction = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#035770";
      showAlert("success","Dark Mode is turned on");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("success","Light Mode is turned on");
    }
  };
  return (
    <Router>
      <>
      <Navbar title="TextUtils" theme={mode} toggle={toggleFunction}/>
      <Alert alert={alert}/>
      <Routes>
          <Route exact path="/about" element={<About theme={mode} />} />
          <Route exact path="/" element={<TextArea theme={mode} display={showAlert}/>} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
