import WheelComponent from "./WheelComponent";

function App() {
  const colors = ["orange", "green", "red", "pink", "cyan", "blue", "magenta"];
  const segments = [
    "Prize1",
    "Prize2",
    "Prize3",
    "Prize4",
    "Prize5",
    "Better luck next time",
    "hello",
  ];
  return (
    <div className="App">
      <WheelComponent segColors={colors} segments={segments} size={190} />
    </div>
  );
}

export default App;
