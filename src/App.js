// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [style, setStyle] = useState("cont");
  
  const changeStyle = () => {
    console.log("you just clicked");
  
    setStyle("cont2");
  };
  return (
    <>
      <div className="App">CHANGE CSS STYLING WITH ONCLICK EVENT</div>
      <div className={style}>
        <button className="button" onClick={changeStyle}>
          Click me!
        </button>
      </div>
    </>
  );
};
export default App;