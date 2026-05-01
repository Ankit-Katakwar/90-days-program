import React from 'react'

const CardContent = () => {
  return (
    <div><div className="absolute top-0 left-0  h-full w-full p-6 flex flex-col justify-between">
        <h2 className="bg-white h-10 w-10 rounded-full flex justify-center items-center font-semibold ">1</h2>
        <div>
            <p className="mb-10 leading-relaxed w-[80%] text-white font-semibold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit magnam animi fuga obcaecati sequi tenetur vel perferendis est esse voluptas.</p>
            <div className="flex justify-between">
            <button className="bg-blue-300 rounded-full px-8 py-3 font-semibold">Satisfied</button>
            <button className="bg-blue-300 rounded-full px-4 py-3 "><i class="ri-arrow-right-line"></i></button>
        </div>
        </div>
        
      </div></div>
  )
}

export default CardContent