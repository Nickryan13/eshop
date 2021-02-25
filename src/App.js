import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {GlobalStyle} from './globalstyles';
import Hero from './components/hero/index';
import Products from './components/products';
import { productData } from './components/products/data';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Choose your favorite' data={productData}/>
    </Router>
  );
}

export default App;
