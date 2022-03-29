import React from 'react';

import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"

import Routers from './components/router/Routers';

function App() {
  return (
    <div style={{overflow: "hidden"}}>
      <Header />
      <Routers />
      <Footer />
    </div>
  );
}

export default App;
