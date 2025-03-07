import React from 'react'
import MainText from '../components/Intro'
import Home_Services from '../new_components/Home_Services'
import ReachOut from '../new_components/Reach'
import Footer from '../new_components/Footer'
import Booking from '../new_components/Booking'
import Carousel from '../new_components/Home_Carousel'
import FAQSection from '../new_components/FAQ'
import TestimonialSection from '../new_components/Customer'
import Home_Brands from '../new_components/Home_Business'
import BrandGrid from '../new_components/Home_Business'
import ServicesGrid from '../new_components/Home_Services'
import WhyUs from '../new_components/Why'

const Home = () => {
  return (
    <>
    <MainText/>
    <Booking/>
    <ServicesGrid/>
    <BrandGrid/>
    <TestimonialSection/>
    <Carousel/>
    <WhyUs/>
    <FAQSection/>
    </>
  )
}

export default Home