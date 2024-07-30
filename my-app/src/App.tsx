import "./App.css";

function App() {
  const objects = [
    { name: "Dimych" },
    { name: "Sveta" },
    { name: "Victor" },
    { name: "Igor" },
  ];
  const liElements = objects.map((el, index) => <li key={index}>{el.name}</li>);
  return (
    <div className="App">
      <ul>{liElements}</ul>
    </div>
  );
}

export default App;
