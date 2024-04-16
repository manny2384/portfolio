import './App.css';
import { useEffect, useState } from 'react';
import Home from "./components/Home";
import Resume from "./components/Resume";
import Projects from './components/Projects';

function App() {

  const [show, setShow] = useState(<div />);
  useEffect(()=>{
    setShow(<Home setShow={setShow} />);
  }, []);
  

  return (
    <div className="App">

      <div className="Menu"> 
        <ul>
          <li onClick={()=>{setShow(<Home setShow={setShow} />)}}> HOME </li>
          <li onClick={()=>{setShow(<Projects />)}}> PROJECTS </li>
          <li> <a href="./components/EmmanuelGonzalezResume.pdf" download="EmmanuelGonzalezResume.pdf" className="fa">Resume &#xf019; </a> </li>
        </ul>
      </div>

      <div className="Content"> {show} <div style={{height: '100px'}}></div> </div>

      <div className="Footer"> 
        <div> linkedIn </div>
        <div> github </div>
        
      </div>
    </div>
  );
}

export default App;
