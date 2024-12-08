import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AboutUs from './components/About-Us'
import Header from './components/Header'
import Categories from './components/Category'
import WhyChooseUs from './components/ChooseUs'
import Link from 'next/link'
import { FaQ } from 'react-icons/fa6'


const page = () => {
  return (
    <div>
      <Header />
  <Navbar />
      <Hero />
      <AboutUs />
      <Link href="/aboutUs"> {/* Use Link for navigation */}
     </Link>
     <Categories />
     <WhyChooseUs />
     <menuitem />
     <FaQ />
      <Footer />
    </div>
  )
}

export default page
