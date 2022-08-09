import logo from './logo.svg';
import './App.css';


fetch('https://api.wheretheiss.at/v1/satellites/25544')       
  .then((response) => {
    console.log(response.status)
    return response.json()
  })
  .then(data => console.log(data))   //must be inside above {} if no return
 .catch(e => console.log('error', e))

 

//   function requestPromise(url){
//     return new Promise((resolve, reject) => {

//     })
//   }

//   let iss = requestPromise('https://api.wheretheiss.at/v1/satellites/25544')
//     .then(res => res.json())
//     .then((data) => console.log(data))
// console.log(iss)

  

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
