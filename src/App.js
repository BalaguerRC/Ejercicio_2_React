import logo from './logo.svg';
import './App.css';
import ContactoComponent from './components/ContactoComponent';
//import Contacto from './components/forms/Contacto';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ContactoComponent></ContactoComponent>
      </header>
    </div>
  );
}

export default App;
