import React from 'react';
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>

    </div>

  );
}

export default App;
