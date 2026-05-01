import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const PageContnet = (props) => {
  return (
    <div className='h-[90vh] w-full gap-8  px-20 py-12 flex  justify-between items-center '>

        <LeftContent/>
        <RightContent user = {props.user} />
    </div>
  )
}
 
export default PageContnet