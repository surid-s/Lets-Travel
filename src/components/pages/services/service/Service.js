import React from "react"
import { Link } from "react-router-dom"
import "./service.css"

const Service = (props) => {
  const { name, _id, image, details } = props.service
  return (
    <div className="service col-lg-4 col-md-6 col-12">
      <div className="bgcolor">
        <img className="service-img" src={image} alt="" />
        <h3 className="text-info">{name}</h3>
        <p>{details}</p>
        <Link to={`/booking/${_id}`}>
          <button className="btn-success rounded-3">Learn More</button>
        </Link>
      </div>
    </div>
  )
}




// 

export default Service
