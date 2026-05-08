import React, { use } from 'react'

const App = () => {
  const users = [
 {name:"Ankit", age:23},
 {name:"Rahul", age:15},
 {name:"Aman", age:30}
]

const adults = users.filter((props)=>props.age>=18)
  return (
    <div>{adults.map((user)=>{
      return  `My name is ${user.name} and my age is ${user.age} and yes I am a adult.`
    })}</div>
  )
}

export default App