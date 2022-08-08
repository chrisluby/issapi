import logo from './logo.svg';
import './App.css';

// let data = fetch('http://api.open-notify.org/iss-now.json')
//   .then((response) => response.json())
//   .then((json) => (resp = json))
//   .catch((error) => console.error(`Error fetching data: ${error.message}`));

// let resp = (data)

// console.log(resp)
// //console.info(resp)


async function getData() {
  let url = 'https://api.wheretheiss.at/v1/satellites/25544';
  try {
    let res = fetch(url)
    return (await res).json()
  } 
  catch(error) {
    console.log(error)
  }
 
}

let data = getData()
console.log(data)

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
