import * as React from 'react';

import {Canvas} from './Canvas/Canvas';
import './App.css';
import { Toolbar } from './Toolbar/Toolbar';

// const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (

      <div className="App">
        <div className="app-wrapper">
        <Canvas height={540} width={960} border="none"/>

        
        </div>
        <Toolbar />
        {/* <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div> */}
        {/* <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
4208

          
        </p> */}

      </div>
    );
  }
}

export default App;
