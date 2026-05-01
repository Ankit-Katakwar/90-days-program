import React, { useState } from 'react'

const App = () => {
  const [inc, setinc] = useState(0)



  return (

    
    <div className='main'>

      The value is {inc}
    
    <button onClick={function(){
      setinc(inc+1)
    }}>Increase</button>
    <button onClick={function(){
      setinc(inc-1)
    }}>Decrease</button>
    <button onClick={function(){
      setinc(inc+5)
    }}>Jump by 5 </button>
    <button onClick={function(){
      setinc(0)
    }}>reset </button>
    </div>
  )
}

export default App