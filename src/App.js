
import React, { Component } from 'react';

import './App.css';

let cap;
fetch('https://api.wheretheiss.at/v1/satellites/25544')       
  .then((response) => {
    console.log(response.status, response)
    return response.json()
  })
  .then((data) => { cap = data }) //must be inside above {} if no return
  .catch(e => console.log('error', e))
 console.log(cap)

 class Long extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
      super(props);

    }
    
  }


function App() {
  return (
    <div className="App">
      {<h1>asd</h1>}
    </div>
  );
}

export default App;
