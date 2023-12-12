import React, { useContext } from "react"
import { CountriesListContext } from "../context/CountriesContext"


const CountriesList = () => {
  const { countries, loading } = useContext(CountriesListContext)

  if (loading) {
    return <p>Loading...</p>
  }
  return (
    <div className="md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 lg:gap-30">
       {countries.map((country, index) => {
        return (
         <div 
          key={index} 
          className="h-96 w-72 border mt-6 bg-[#FFF] shadow-[0px_2px_9px_0px_rgba(0, 0, 0, 0.05)] rounded-md">
          <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} />
          <h4 className="text-[#111517] text-lg font-extrabold mt-6">{country.name.common}</h4>
          <div className="mt-4">
            <p className="text-[#111517] text-sm font-semibold mt-px">
              Population: 
              {" "}
              <span className="text-[#111517] text-sm font-light">{country.population}</span>
            </p>
            <p className="text-[#111517] text-sm font-semibold mt-px text">
              Region: 
              {" "}
              <span className="text-[#111517] text-sm font-light">{country.region}</span>
            </p>
            <p className="text-[#111517] text-sm font-semibold mt-px">
              Capital: 
              {" "}
              <span className="text-[#111517] text-sm font-light">{country.capital}</span>
            </p>
          </div>
       </div>
        )
       })}
    </div>
  )
}

export default CountriesList