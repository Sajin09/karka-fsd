import {useNavigate} from "react-router-dom"

const Login =()=>{
    const nav = useNavigate()
    const handleClick=()=>{
       
        nav('register')
    }
    return(
        <>
            <p>Login</p>
            <button onClick={handleClick}>Register</button>
        </>
    )
}
export default Login