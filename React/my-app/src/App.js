// import logo from './logo.svg';
import Tajmahal from './images/Tajmahal.webp'
import './App.css';
import Welcome from './components/Welcome.js';
import Button from './components/Button.js';
import Thank from './components/Thank.js';

function App() {
  let obj={
    Name :'Sajin',
    Age :24
  }
  return (
    <div className="App">
        <div>
          <Welcome/>
          <img className='img' src={Tajmahal} alt="Tajmahal"/>
          <Button/>
          <Button/>
          <h1>Welcome to {obj.Name}'s Page, and my Age is {obj.Age}</h1>
          <Thank/>
        </div>
    </div>
  );
}

export default App;
