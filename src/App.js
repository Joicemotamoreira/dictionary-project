import "./App.css";
import logo from "./logo/logo.png";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <a
            href="https://github.com/Joicemotamoreira/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            <img src={logo} alt="image logo" className="logo img-fluid"></img>
          </a>
        </header>
        <main>
          <Dictionary defaultKeyword="beach" />
        </main>

        <footer className="App-footer">
          Coded by{" "}
          <a
            href="https://www.linkedin.com/in/joicemotamoreira/"
            target="_blank"
            rel="noreferrer"
          >
            Joice
          </a>{" "}
          with 🤎!
        </footer>
      </div>
    </div>
  );
}

export default App;
