// import React, { useEffect, useState } from "react"
// import Service from "./service/Service"

// const ServicesPage = () => {
//   // ------------fetching from fake data named "service.json" located on public folder-----------//

//   const [services, setServices] = useState([])
//   useEffect(() => {
//     fetch("fakeDB.json")
//       .then((res) => res.json())
//       .then((data) => setServices(data))
//   }, [])
//   return (
//     <div>
//       <h2 className="my-4 text-warning fw-bolder "> Our Services</h2>
//       {/* <hr className="service-hr" /> */}
//       <div className="container-fluid">
//         <div className="row g-4">
//           {services.map((service) => (
//             <Service service={service} key={service.id}></Service>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ServicesPage
