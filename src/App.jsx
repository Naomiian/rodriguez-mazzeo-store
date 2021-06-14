import logo from './logo.svg';
import './App.css';
import { NAME_APP } from './utils/const';
import { NavbarComponent } from './components/NavbarComponent';

function App() {
  return (
    <div className="App">
      <h1>
        {NAME_APP}
      </h1>
      <NavbarComponent />
    </div>
  );
}

export default App;
