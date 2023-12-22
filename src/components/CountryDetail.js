import React, { useContext, useEffect, useState } from "react"
import { IoIosArrowRoundBack } from "react-icons/io";
import { ContextTheme } from "../context/ThemeContext";
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
const CountryDetail = () => {
  const { darkTheme } = useContext(ContextTheme)
  const [country, setCountry] = useState(null)
  const [borderingCountries, setBorderingCountries] = useState([])

  const { countryName } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchCountryDetail = async () => {
      try {
        const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`)
        setCountry(response.data[0])

        if (response.data[0]?.borders?.length > 0) {
          const borders = response.data[0].borders;

          const borderingCountriesResponse = await axios.get(
            `https://restcountries.com/v3.1/alpha?codes=${borders.join(",")}`
          );

          setBorderingCountries(borderingCountriesResponse.data);
        }
      } catch (error) {
        console.log("Error fetching country detail", error)
      }
    }

    fetchCountryDetail()
  }, [countryName])

  return (
    <>
      <div className="h-screen w-full">
        <div className="flex gap-2 cursor-pointer mt-10 lg:mt-20 mb-16 lg:mb-20">
          <IoIosArrowRoundBack 
           size={20} 
           className={`${
           darkTheme ? "text-[#FFF]" : "text-[#111517]"}
           relative top-3 left-10`}
          />
         <button 
          type="button" 
          onClick={() => navigate("/")}
          className={`${
          darkTheme ? "bg-[#2B3844] text-white" : "bg-white text-[#111517]"}
          py-3 px-12 rounded-sm shadow-[0px_0px_7px_0px_rgba(0, 0, 0, 0.29)] text-base font-light leading-5`}
         >
          Back
         </button>
      </div>
      
      <div className="xl:flex xl:gap-28">
       {country ? (
        <>
          <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} className="md:w-[80%] xl:w-[40%]"/>
        <div>
        <h4 className={`${darkTheme ? "text-[#FFF]" : "text-[#111517]"} text-lg text-left font-extrabold mt-6 mb-4`}>{country.name.common}</h4>
        <div className="mb-2 flex gap-1">
          <h5 className={`${darkTheme ? "text-[#FFF]" : "text-[#111517]"} text-left text-sm font-semibold mt-px}`}>
            Native Name: 
          </h5>
            <span className={`${darkTheme ? "text-[#FFF]" : "text-[#111517]"} text-left text-sm font-light}`}>{country.name.nativeName?.common || country.name.common}</span>
        </div>
        <div className="mb-2 flex gap-1">
          <h5 className={`${darkTheme ? "text-[#FFF]" : "text-[#111517]"} text-left text-sm font-semibold mt-px}`}>
           Population: 
          </h5>
            <span className={`${darkTheme ? "text-[#FFF]" : "text-[#111517]"} text-left text-sm font-light}`}>{country.population}</span>
        </div>
        <div className="mb-2 flex gap-1">
          <h5 className={`${darkTheme ? "text-[#FFF]" : "text-[#111517]"} text-left text-sm font-semibold mt-px}`}>
           Region: 
          </h5>
            <span className={`${darkTheme ? "text-[#FFF]" : "text-[#111517]"} text-left text-sm font-light}`}>{country.region}</span>
        </div>
        <div className="mb-2 flex gap-1">
          <h5 className={`${darkTheme ? "text-[#FFF]" : "text-[#111517]"} text-left text-sm font-semibold mt-px}`}>
           Sub Region: 
          </h5>
            <span className={`${darkTheme ? "text-[#FFF]" : "text-[#111517]"} text-left text-sm font-light}`}>{country.subregion}</span>
        </div>
        <div className="flex gap-1">
          <h5 className={`${darkTheme ? "text-[#FFF]" : "text-[#111517]"} text-left text-sm font-semibold mt-px`}>
           Capital: 
          </h5>
            <span className={`${darkTheme ? "text-[#FFF]" : "text-[#111517]"} text-left text-sm font-light}`}>{country.capital}</span>
        </div>
        </div>

        <div className="mt-8">
        {country.tld && country.tld.length > 0 && (
        <div className="mb-2 flex gap-1">
          <h5 className={`${darkTheme ? "text-[#FFF]" : "text-[#111517]"} text-left text-sm font-semibold mt-px}`}>Top Level Domain:</h5>
            <ul>
             {country.tld.map((domain) => (
              <li key={domain} className={`${darkTheme ? "text-[#FFF]" : "text-[#111517]"} text-left text-sm font-light}`}>
                {domain}
              </li>
              ))}
            </ul>
        </div>
          )}
        <div className="mb-2 flex gap-1">
         {country.currencies ? (
          <>
            <h5 className={`${darkTheme ? "text-[#FFF]" : "text-[#111517]"} text-left text-sm font-semibold mt-px}`}>Currencies:</h5>
              <ul>
               {Object.keys(country.currencies).map((currencyCode, index) => (
                <li key={index} className={`${darkTheme ? "text-[#FFF]" : "text-[#111517]"} text-left text-sm font-light}`}>
                 {country.currencies[currencyCode].name} ({currencyCode}) - {country.currencies[currencyCode].symbol}
                </li>
                ))}
              </ul>
          </>
            ) : (
            <p className={`${darkTheme ? "text-[#FFF]" : "text-[#111517]"} text-left text-sm font-light}`}>No currency information available.</p>
            )}
        </div>
         {Object.keys(country.languages).length > 0 && (
        <div className="mb-2 flex gap-1">
          <h5 className={`${darkTheme ? "text-[#FFF]" : "text-[#111517]"} text-left text-sm font-semibold mt-px}`}>Languages:</h5>
            <ul>
             {Object.entries(country.languages).map(([code, language]) => (
              <li key={code} className={`${darkTheme ? "text-[#FFF]" : "text-[#111517]"} text-left text-sm font-light}`}>
               {language}
              </li>
              ))}
            </ul>
        </div>
          )}
      </div>
      </>
       ) : (
          <p className={`${darkTheme ? "text-[#FFF]" : "text-[#111517]"} text-sm font-light}`}>Loading...</p>
        )}
     
    </div>
    <div className="xl:mt-16 xl:flex items-center xl:gap-4">
        <h5 className={`${darkTheme ? "text-[#FFF]" : "text-[#111517]"} text-md text-left font-extrabold mt-6 mb-4`}>Border Countries:</h5>
        <div className="flex gap-2">
          {borderingCountries.map((borderCountry) => (
          <button
           key={borderCountry.name.common}
           className={`${
           darkTheme ? "bg-[#2B3844] text-white" : "bg-white text-[#111517]"} 
           py-2 px-4 rounded-md shadow-[0px_0px_7px_0px_rgba(0, 0, 0, 0.29)]`}
           onClick={() =>
           navigate(`/country/${borderCountry.name.common}`)
           }
          >
           {borderCountry.name.common}
          </button>
           ))}
        </div>
      </div>
   </div>
  </>
  )
}

export default CountryDetail

 



 




