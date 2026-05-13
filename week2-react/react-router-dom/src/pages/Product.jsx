import React from 'react'
import { Link , Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div className='w-full h-screen font-bold text-2xl gap-6 flex items-center justify-center'>
        
        <Link to="/product/men">Men's Collection</Link>
        <Link to="/product/women">Women's Collection</Link>
        
        <Outlet />
    </div>
  )
}

export default Product