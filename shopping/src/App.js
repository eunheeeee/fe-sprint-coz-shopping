import './App.css';
import { useState } from 'react';
import { Routes,Route,Link} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './page/main';



function App() {
  return (
    <div>
    <Header/>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/products/list"  />
    </Routes>
    <Footer />

    
    </div>
  );
}

export default App;
