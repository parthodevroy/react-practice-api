import { useEffect, useState } from "react";
import "./Country.css"


const Countrys = () => {


   const [countrydata, setCountrydata]=useState([])

   const [visited, setVisited]=useState([])

  


   const visitedButton=(index)=>{
   
    const newVisited=[...visited];
    newVisited[index]=!newVisited[index];
    setVisited(newVisited)
   
// setVisited(visited? false:true)
   }


   useEffect(()=>{
    const fetchcountrys=fetch("https://openapi.programming-hero.com/api/all")
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
      setCountrydata(data.countries)

      setVisited(Array (data.countries.length).fill(false));
    }
         
       )
   }, [])
    

   const visitedcount=visited.filter((v)=>v).length;
    return (
        <div className="">
            <p className="text-4xl text-center">Our World Country</p>

            <p>country visited:{visitedcount}</p>
            <div className="grid grid-cols-1 md:grid-cols-3">

            {
                countrydata.map((country ,index)=>(
                    
                    <div
                    key={country.cca3?.cca3}
                      className={`" border-2 border-amber-400 p-2 m-2 w-[250px] rounded-2xl" ${visited[index]?"country-visited":""}`}>
                  <p> name:: {country.name?.common}</p>
                  <img src={country.flags?.flags?.png} alt={country.flags?.flags?.alt ||country.name?.common} />
                  <p>population::{country.population?.population}
                    <br></br> country type::{country.population.population>50000 ?"big country":"small counry"}</p>
                  <p>{country.region?.region}</p>
                  <button className="text-red-400" onClick={()=> visitedButton (index)}>
                    {visited[index] ? "Visited":"Visited Now"}
                    
                    </button>
                  
               </div> ))

            } 
            </div>
        </div>
    );
};

export default Countrys;