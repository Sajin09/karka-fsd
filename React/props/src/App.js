import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Table from './components/Table';

function App() {
  // const isLogin = false
  const name = "indhuja"
  let age = 24
  let students= {
    student1 : "Sajin",
    student2 : "Jaculin",
    student3 : "Alen"
  }
  let skills=['html','css','js']

  return (
    <div className="App">
      {/* {isLogin ? <Login/> : <Register/>} */}
      <Table myname={name} myage={age} mydegree="B.E" myrollnumber={2324001} ismarried={false} mystudent={students} myskills={skills}/>
    </div>
  );
}

export default App;
