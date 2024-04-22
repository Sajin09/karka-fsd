import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './Components/login';
import Register from './Components/register';

const App = () =>{
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='register' element={<Register/>}/>

      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
