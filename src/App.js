import WheelComponent from "./WheelComponent";

function App() {
  const colors = [
    "orange",

    "red",
    "gold",
    "darkblue",
    "magenta",
    "green",
    "blue",
  ];
  const segments = [
    "Prize1",
    "Prize2",
    "Prize3",
    "Prize4",
    "Prize5",
    "try again",
    "hello",
  ];
  return (
    <div className="App">
      <WheelComponent segColors={colors} segments={segments} size={170} />
    </div>
  );
}

export default App;
