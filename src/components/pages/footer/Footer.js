import React from "react"
// import logo from "../../../images/—Pngtree—heart care icon with a_3670173.png"
import "./foooter.css"

const Footer = () => {
  return (
    <>
      <div className="main-footer bg-dark mt-5 py-5">
        <div className="container   ">
          <div className="row">
            <div className="col ">
              {/* <img className="nav-img" src={logo} alt="" /> */}
              <hr className="text-danger" />
              <ul className="text-light">
                <li>01518011911</li>
                <li>Bhola, Barisal </li>
                <li>123 street, Kalinath Bazar</li>
              </ul>
            </div>
            <div className="col text-light">
              <h4>In Charge</h4>
              <hr className="text-danger" />

              <ul className="text-light">
                <li>SM Surid</li>
                <li>Other Stuff</li>
                <li>Cheifs</li>
              </ul>
            </div>
            <div className="col text-light">
              <h4>Stuff</h4>
              <hr className="text-danger" />

              <ul className="text-light">
                <li>SM Surid</li>
                <li>Other Stuff</li>
                <li>Cheifs</li>
              </ul>
            </div>
          </div>
          <hr className="text-danger fw-bold" />
          <div className="row">
            <p className="text-danger">&copy; Reserved by SM Surid</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
