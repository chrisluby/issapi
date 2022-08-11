
import React, { Component } from 'react';

import './App.css';

let ISSDATA;
fetch('https://api.wheretheiss.at/v1/satellites/25544')       
  .then((response) => {
    console.log(response.status)
    return response.json()
  })
  .then((data) => ISSDATA = data) //must be inside above {} if no return
  .catch(e => console.log('error', e))


  setTimeout(() => console.log(ISSDATA.latitude) ,1500)

let latitude = ISSDATA.latitude





class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props)
    this.state = {
      //ISSlatitude: latitude
    }

  }
//funcs can be written here


  render() {
    return (  
      <div className="App">
    <h1>yo {this.state.ISSlatitude}</h1>
      </div>
    );
  }
  }
  

export default App;
