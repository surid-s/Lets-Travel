// ------------- This service section is for Home page------ --------------//
import React, { useEffect, useState } from "react"
import Service from "./service/Service"

const Services = () => {
    // ------------fetching from fake data named "service.json" located on public folder-----------//

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://dark-tomb-39983.herokuapp.com/services')
            .then((res) => res.json())
            .then((data) => setServices(data))
    }, [])
    return (
        <>
            <h2 className="my-4 text-warning fw-bolder "> Our Services</h2>
            {/* <hr className="service-hr" /> */}
            <div className="container-fluid">
                <div className="row g-4">
                    {services.slice(0, 6).map((service) => (
                        <Service service={service} key={service.id}></Service>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Services
