import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; 
import Location from './components/location';

function App() {
  return (
    <div>
        <Location/>
    </div>   
  );
}

export default App;
