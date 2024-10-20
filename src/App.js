import './App.css'
import { useState, useEffect } from 'react';
import MyCarousel from './MyCarousel';
import MyNavbar from './MyNavbar';
import MyBottombar from './MyBottombar';

function App() {

  return (
    <div>
      <MyNavbar />
      <MyCarousel />
      <MyBottombar />
    </div>
  );
}

export default App;
