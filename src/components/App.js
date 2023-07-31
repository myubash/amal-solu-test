import { Route, Routes, BrowserRouter } from "react-router-dom";

import Header from '../layout/Header'
import Footer from '../layout/Footer'

import Home from './Home'
import TextToPDF from './TextToPDF/Index'
import QueueSystem from './QueueSystem/Index'

import './App.css';

function App() {
  return (
    <BrowserRouter style={{backgroundColor: '#f5efdf'}} className='py-2 pt-5'>
      <Header/>
      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/text-to-pdf' exact Component={TextToPDF}/>
        <Route path='/queue-system' exact Component={QueueSystem}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
