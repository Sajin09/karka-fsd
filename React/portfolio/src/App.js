import './App.css';
import Header from './component/Header'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Section from './component/Section';


function App() {
  return (
   <>
   <BrowserRouter>
   <Header/>
   <Section/>
   <Routes>
    
    
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;