import logo from './logo.svg';
import './App.css';
//import ContactoComponent from './components/ContactoComponent';
//import Contacto from './components/forms/Contacto';
//import Clock from './components/Clock';
import Clock from './components/Clock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*<ContactoComponent></ContactoComponent>*/}
        <Clock></Clock>
      </header>
    </div>
  );
}

export default App;
