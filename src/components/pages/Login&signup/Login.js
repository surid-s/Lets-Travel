import React, { useState } from "react"
import "./login.css"
import login from "../../../images/2007.i039.019_cyber_security_spyware_data_protection_isometric_set-06.jpg"
import useAuth from "../../../hooks/useAuth"
import { Link } from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { singInUsingGoogle } = useAuth();
  const handleEmail = e => {
    setEmail(e.target.value);
  }
  const handlePassword = e => {
    setPassword(e.target.value);
  }
  return (
    <div>
      <h2 className="text-center text-success m-3">Please Login</h2>
      <div className="login-container">
        <div className="login-img  ">
          <img className="img-fluid" src={login} alt="" />
        </div>
        <div className="login-form mt-4 pt-4">
          <h4 className="mb-3">Fillup the Form</h4>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input onBlur={handleEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input onBlur={handlePassword} type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">Remember Login</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          <button onClick={singInUsingGoogle} className="btn-danger">
            Google SignIn
          </button>
          <p>Don't have any account? <Link to="/signup">Register for free</Link> </p>
        </div>
      </div>
    </div>
  )
}

export default Login
