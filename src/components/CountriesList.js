import React, { useContext } from "react"
import { CountriesListContext } from "../context/CountriesContext"
import { ContextTheme } from "../context/ThemeContext"
import { Link } from "react-router-dom"

const CountriesList = () => {
  const { darkTheme } = useContext(ContextTheme)
  const { countries, loading } = useContext(CountriesListContext)

  if (loading) {
    return <p>Loading...</p>
  }
  return (
    <div className="h-[100%] mt-[2rem] lg:mt-[3rem] md:grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 md:gap-8 2xl:gap-20">
      {countries.map((country, index) => {
        return (
          <div 
           key={index} 
           className={`${
           darkTheme ? "bg-[#2B3844]" : "bg-white"}
           pb-20 w-full mt-6 shadow-[0px_2px_9px_0px_rgba(0, 0, 0, 0.05)] rounded-lg`}>
            <Link to={`country/${country.name.common}`}>
            <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} />
            <h4 className={`${darkTheme ? "text-[#FFF]" : "text-[#111517]"} ml-6 text-left text-lg font-extrabold mt-6 mb-4`}>{country.name.common}</h4>
            </Link>
            <div className="mb-2 ml-6 flex gap-1">
              <h5 className={`${darkTheme ? "text-[#FFF]" : "text-[#111517]"} text-sm font-semibold mt-px}`}>
               Population: 
              </h5>
              <span className={`${darkTheme ? "text-[#FFF]" : "text-[#111517]"} text-sm font-light}`}>{country.population}</span>
            </div>
            <div className="mb-2 ml-6 flex gap-1">
              <h5 className={`${darkTheme ? "text-[#FFF]" : "text-[#111517]"} text-sm font-semibold mt-px}`}>
               Region: 
              </h5>
              <span className={`${darkTheme ? "text-[#FFF]" : "text-[#111517]"} text-sm font-light}`}>{country.region}</span>
            </div>
            <div className="ml-6 flex gap-1">
              <h5 className={`${darkTheme ? "text-[#FFF]" : "text-[#111517]"} text-sm font-semibold mt-px`}>
               Capital: 
              </h5>
              <span className={`${darkTheme ? "text-[#FFF]" : "text-[#111517]"} text-sm font-light}`}>{country.capital}</span>
            </div>
          </div>
        )
       })}
    </div>
  )
}

export default CountriesList