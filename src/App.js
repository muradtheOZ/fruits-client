import logo from './logo.svg';
import './App.css';
var name = "Jhankar Mahbub"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit Done <code>src/App.js</code> and save to reload.
        </p>
        <p>Hello Dr {name}</p>

        <Person></Person>
        <Person></Person>
        
      </header>
    </div>
  );
}

function Person(){
  return(
    <div>
      <h1>Hello People I am {name}</h1>
      <p>I am from Rajshahi</p>
    </div>
    
  )
}
export default App;
