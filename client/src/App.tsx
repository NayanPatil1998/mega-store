import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Layout/Header/header.layout';
import Carousel from './Components/Carousel.component/Carousel.component';
import Footer from './Layout/Footer/Footer.layout';
import Login from './Pages/Login.pages/Login.pages';

function App() {
  return (
    <div className="App">
      {/* <Header />
      <Carousel />
      <Footer /> */}
      <Login />
    </div>
  );
}

export default App;
