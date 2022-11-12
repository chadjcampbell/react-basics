import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./MyComponent";
import Clock from "./Clock";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyComponent title="This is a test prop, my first component!" />
        <Clock />
      </header>
    </div>
  );
}

export default App;
