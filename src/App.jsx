


import { Suspense } from 'react'
import './App.css'
import Countrys from './coountry/Countrys'



function App(){

  // const Coutryfetch=fetch("https://openapi.programming-hero.com/api/all")
  // .then(res=>res.json())

 
  return (
    <>
      <div className='p-2 md:pl-50'>
        
      <Countrys ></Countrys>
      </div>
{/* 
      <Suspense fallback={"country info loading...."}>

        <Countrys Coutryfetch={Coutryfetch}></Countrys>


      </Suspense> */}
    </>
  )
}


export default App
