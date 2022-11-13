import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./MyComponent";
import Clock from "./Clock";
import Tasks from "./Tasks";

function App() {
  const taskArray = [
    { title: "Cabbage", isFruit: false, id: 1 },
    { title: "Garlic", isFruit: false, id: 2 },
    { title: "Apple", isFruit: true, id: 3 },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyComponent title="This is a test prop" />
        <Clock />
        <div className="tasksContainer">
          <Tasks taskArray={taskArray} />
        </div>
      </header>
    </div>
  );
}

export default App;
