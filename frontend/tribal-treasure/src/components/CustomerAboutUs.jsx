import React from 'react'
import CustomerNavBar from './CustomerNavBar'
import AboutUs from './Aboutus'

export default function CustomerAboutUs({navbar}) {
  return (
    <>
   {navbar}
    <AboutUs/>
    </>
  )
}
