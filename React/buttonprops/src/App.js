import logo from './logo.svg';
import './App.css';
import Button from './component/Button';
import Input from './component/Input';
import Sajin from './component/Sajin';
import User from './component/User'

function App() {
  const onClick = () => {
    alert('Hai')
  }
  return (
    <>
    <Button click={onClick}/>
    <Input />
    <Sajin />
    <User />
    </>
  );
}

export default App;
