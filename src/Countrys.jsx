import { useEffect, useState } from "react";

const Countrys = () => {


   const [countrydata, setCountrydata]=useState([])

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
        <div>
            <p>our world</p>

            {
                countrydata.map((country)=>(
                    <div className="countrystyle">
                  <p>  {country.name?.common}</p>
                  <img src={country.flags?.flags?.png} alt={country.flags?.flags?.alt ||country.name?.common} />
                  
                 
               </div> ))

            } 
        </div>
    );
};

export default Countrys;