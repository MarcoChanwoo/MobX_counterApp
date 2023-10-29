import logo from "./logo.svg";
import "./App.css";

function App(props) {
  const { myCounter } = props;
  return (
    <div style={{ textAlign: "center", padding: 16 }}>
      카운트:
      <br />
      <br />
      마이너스?:
      <br />
      <br />
      <button>+</button>
      <button>-</button>
    </div>
  );
}

export default App;
