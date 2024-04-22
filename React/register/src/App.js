import logo from './logo.svg';
import './App.css';
import Register from './component/Register'
import Login from './component/Login';
import Welcome from './component/Welcome';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Welcome' element={<Welcome/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
