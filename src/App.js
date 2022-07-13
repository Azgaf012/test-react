import logo from "./logo.svg";
import "./App.css";
import AjaxApis from "./components/AjaxApis";
import ContadorHooks from "./components/ContadorHooks";
import ScrollHooks from "./components/ScrollHooks";
import RelojHooks from "./components/RelojHooks";
import AjaxHooks from "./components/AjaxHooks";
import HooksPersonalizados from "./components/HooksPersonalizados";
import Referencias from "./components/Referencias";
import Formularios from "./components/Formularios";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>

        <section>
          <hr />
          <AjaxApis />
          <hr />
          <ContadorHooks titulo="Numeros"/>
          <hr />
          <ScrollHooks/>
          <hr />
          <RelojHooks/>
          <hr />
          <AjaxHooks/>
          <hr />
          <HooksPersonalizados/>
          <hr />
          <Referencias/>
          <hr />
          <Formularios/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </section>
      </header>
    </div>
  );
}

export default App;
