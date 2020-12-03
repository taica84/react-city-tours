import React, { Component } from 'react';
import './App.scss';
import Navbar from './componets/NAVBAR/Navbar';
import TourList from './componets/TOURLIST/TourList';


export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <TourList/>
        
      </React.Fragment>
    )
  }
}

