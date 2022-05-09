import logo from './logo.svg';
import './App.css';
import {Fragment} from 'react'; 
import React, {Component} from 'react';
import MyComponent from './MyComponent';


const App = () => {
  
  return (
  
    <MyComponent name='문자열 ' favoriteNumber={5}>리엑트</MyComponent>
  
  );

};

export default App;
