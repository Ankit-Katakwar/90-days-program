import React from 'react'
import Navbar from './Navbar'
import PageContnet from './PageContnet'

const Section1 = (props) => {
  return (
    <div className=' h-screen w-full '>
        <Navbar/>
        <PageContnet user={props.user} />


    </div>
  )
}
 
export default Section1