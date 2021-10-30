import React, { useState } from "react"
import { Link } from "react-router-dom"
import loginimg from "../../../images/register.jpg"

// Main Functoin //
const Singup = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  //  handling Email
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  //  handling Password
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  // handling Register Button//
  const handleRegister = (e) => {
    console.log(email, password)
    e.preventDefault()
  }

  // Main Function//
  return (
    <div>
      <h2 className="text-center text-info my-3">Please Register</h2>

      <div className="container-fluid login-container">
        <div className="login-img  ">
          <img className="img-fluid" src={loginimg} alt="" />
        </div>

        {/* ---------------form------------ */}

        <div className="login-form mt-4 pt-4">
          <h4 className="mb-3">Fillup the Form</h4>
          <form onSubmit={handleRegister}>
            <div className=" mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                onBlur={handleEmail}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                onBlur={handlePassword}
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                required
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>

            <h5 className="text-warning">Or</h5>
            <button className="btn-danger rounded-3">Google SignUp</button>
          </form>

          <p>
            Already registered? {""}
            <Link to="/login">Login Here </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Singup
