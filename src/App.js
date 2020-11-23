import React from 'react';
import './App.css';

import Logo from './components/Logo/Logo';
import Home from './WebPages/Home';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const App = () => {

  
  return (
    <div className="app">
      {/* <Container>
        
      </Container> */}
      <Home />
    </div>
  );
}

export default App;
