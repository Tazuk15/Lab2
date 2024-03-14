import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/header';
import Slide from './component/slide';
import Footer from './component/footer';
import Products from './component/product';

function App() {
  const title = [
    'Home',
    'About',
    'Shop',
    'Contact'
  ]
  return (
    <>
      <Header titles = {title} />
      <main>
      <Slide/>
      <Products/>
      </main>  
      <Footer/>      
    </>
  )
}

export default App;
