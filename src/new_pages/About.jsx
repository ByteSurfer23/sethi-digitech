import React from 'react'
import Who from '../new_components/about/Who'
import OurValues from '../new_components/about/Values'
import ScrollingSteps from '../new_components/about/Pathway'
import Bigtext_about from '../new_components/about/Bigtext_about'

const About = () => {
  return (
    <>
    <div className="w-full">
      <Bigtext_about/>
    <Who/>
        <OurValues/>
        <ScrollingSteps/>
    </div>

    </>

  )
}

export default About