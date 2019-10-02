import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import TableContainer from './components/TableContainer';
function App() {
  return (
    <div className="App">
      <Header/>
      <TableContainer/>
      <Footer/>
    </div>
  );
}

export default App;
