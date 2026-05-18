import React, { useContext, useState } from 'react'
import { TheamData } from '../context/TheamContext'

const Button = () => {
    const [theam, setTheam] = useContext(TheamData)

    const changeTheam = ()=>{
    if(theam === "light"){
        setTheam("Darks")
    }else{
        setTheam("lights")
    }
    }

  return (
    <div onClick={changeTheam} className='bg-amber-200 p-3 w-28 h-15 m-4 rounded text-center'>Change Theam {theam}</div>
  )
}

export default Button