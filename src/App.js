import React, { useState } from 'react';
import './App.css';

import Wrapper from './Components/Wrapper';
import Navbar from './Components/Navbar';
import FormWrapper from './Components/FormWrapper';


function App() {

  return (
    <div className="App">
        <Wrapper>
          <Navbar />
          <FormWrapper />
        </Wrapper>
    </div>
  );
}

export default App;
