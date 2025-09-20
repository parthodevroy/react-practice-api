import { useEffect, useState } from "react";


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
    }
         
       )
   }, [])
    
    return (
        <div >
            <p>our world</p>
            <div className="grid grid-cols-3 mx-auto">

            {
                countrydata.map((country ,index)=>(
                    
                    <div
                    key={country.cca3?.cca3}
                      className=" border-2 border-amber-400 p-2 m-2 rounded-2xl">
                  <p>  {country.name?.common}</p>
                  <img src={country.flags?.flags?.png} alt={country.flags?.flags?.alt ||country.name?.common} />
                  <p>{country.population?.population}</p>
                  <p>{country.region?.region}</p>
                  <button onClick={()=>visitedButton(index)}>
                    {visited[index] ? "visited":"notvisited"}
                    
                    </button>
                  
               </div> ))

            } 
            </div>
        </div>
    );
};

export default Countrys;