import './App.css';
import { useState } from 'react';
import Home from "./components/Home";
import Resume from "./components/Resume";
import Projects from './components/Projects';

function App() {

  const [show, setShow] = useState(<Home />);

  return (
    <div className="App">

      <div className="Menu"> 
        <ul>
          <li onClick={()=>{setShow(<Home />)}}> HOME </li>
          <li onClick={()=>{setShow(<Projects />)}}> PROJECTS </li>
          <li onClick={()=>{setShow(<Resume />)}}> RESUME <a className="fa"> &#xf019; </a> </li>
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
