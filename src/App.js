import React from 'react';
import Profil from './Components/Profil';
import FullName from './Components/FullName';
import Adress from './Components/Adress';
import './App.css';
import "./Styles.css";

function App() {
  return (
    <div style={{ border: "solid 1px black", maxWidth: "100vw", marginTop:'30px', padding:'10px' }}>

      <Profil />
      
      <FullName />

      <Adress />

    </div>

  );
}


export default App;
