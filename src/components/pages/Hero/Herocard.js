import React from "react"
import "./herocaed.css"
// import ReactDOM from "react-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faClock,
  faUserMd,
  faPlaneDeparture
} from "@fortawesome/free-solid-svg-icons"

const element1 = <FontAwesomeIcon icon={faClock} />
const element2 = <FontAwesomeIcon icon={faUserMd} />
const element3 = <FontAwesomeIcon icon={faPlaneDeparture} />

const Herocard = () => {
  return (
    <div className="container-fluid card-container mb-4 pb-4">
      <div className="card">
        {/* <img src={element1} alt="" /> */}

        <div class="card-body">
          <h5 class="card-title">{element1} 24/7 Online</h5>
          <p class="card-text">
            “Do not follow where the path may lead. Go instead where there is no path and leave a trail” – Ralph Waldo Emerson
          </p>
        </div>
      </div>

      <div className="card ">
        <div class="card-body">
          <h5 class="card-title">{element2} Best Guides</h5>
          <p class="card-text">
            “Man cannot discover new oceans unless he has the courage to lose sight of the shore” – Andre Gide
          </p>
        </div>
      </div>

      <div className="card ">
        <div class="card-body">
          <h5 class="card-title">{element3} Air Services</h5>
          <p class="card-text">
            “You have brains in your head. Feet in your shoes. You can steer yourself any direction you choose. You’re on your own. And you know what you know. And YOU are the one who’ll decide where to go…”

            – Dr. Seuss
          </p>
        </div>
      </div>
    </div>
  )
}

export default Herocard
