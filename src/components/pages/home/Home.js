import React from "react"
import Subscribe from "../../Subscribe/Subscribe"
import Contact from "../contact us/Contact"
// import Header from "../header/Header"
import Hero from "../Hero/Hero"
import Services from "../services/Services"

const Home = () => {
  return (
    <div>
      {/* <Header></Header> */}
      <Hero></Hero>
      <Services></Services>
      <Contact></Contact>
      <Subscribe></Subscribe>
    </div>
  )
}

export default Home
