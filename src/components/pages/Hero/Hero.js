import React from "react"
import { Link } from "react-router-dom"
import "./hero.css"
import Herocard from "./Herocard"

const Hero = () => {
  return (
    <div>
      <section className="showcase px-4">
        <div className="overlay">
          <h1 className="text-danger">
            Let's Go to,{" "}
            <span className="fw-bold text-success">A World Tour.</span>
          </h1>
          <div className="apointment">
            <Link to="/contact">See Availablle Tours</Link>
          </div>
        </div>
      </section>
      <Herocard></Herocard>
    </div>
  )
}

export default Hero
