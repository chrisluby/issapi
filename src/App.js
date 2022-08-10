/* eslint-disable no-useless-constructor */

import { render } from '@testing-library/react';
import React, { Component } from 'react';

import './App.css';

let ISSDATA;
let test = fetch('https://api.wheretheiss.at/v1/satellites/25544')       
  .then((response) => {
    console.log(response.status)
    return response.json()
  })
  .then((data) => ISSDATA = data) //must be inside above {} if no return
  .catch(e => console.log('error', e))


  setTimeout(() => console.log(ISSDATA.latitude) ,150)





class App extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (  
      <div className="App">
    <h1>yo {}</h1>
      </div>
    );
  }
  }
  

export default App;
