const Register = () => {
    const gender = "female"
    return(
        <div style={{backgroundColor : gender === "male" ? "Blue" : "Pink"}}>
            Register
        </div>
    )
}
export default Register