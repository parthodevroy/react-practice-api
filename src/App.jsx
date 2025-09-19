


import { Suspense } from 'react'
import './App.css'
import Countrys from './countrys'



function App(){

  // const Coutryfetch=fetch("https://openapi.programming-hero.com/api/all")
  // .then(res=>res.json())

 
  return (
    <>
      <h4>this is our world country</h4>
      <Countrys></Countrys>
{/* 
      <Suspense fallback={"country info loading...."}>

        <Countrys Coutryfetch={Coutryfetch}></Countrys>


      </Suspense> */}
    </>
  )
}


export default App
