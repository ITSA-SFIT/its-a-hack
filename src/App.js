import logo from "./title.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <p>Coming soon...</p>
        <p>
          Organized by{" "}
          <a
            className="App-link"
            href="https://itsa.sfit.ac.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            ITSA
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
