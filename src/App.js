import React, { Component } from 'react';
import './App.css';

import AppBarComponent from './Components/AppBarComponent';
import Landing from './Components/Landing';
import About from './Components/About';
import Projects from './Components/Projects';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBarComponent />
        <Landing />
        <About />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;
