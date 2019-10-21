import React from 'react';

import './App.css';

//Components
import Info from '../Info/info'
import Mission from '../Mission/mission'
import ContactUs from '../ContactUs/ContactUs'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Info />
       <Mission />
       <ContactUs />
      </header>
    </div>
  );
}

export default App;
