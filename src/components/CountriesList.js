import React from "react"
import DataCountry from "../data.json"

const CountriesList = () => {
  return (
    <div className="md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 lg:gap-30">
       {DataCountry.map((data, index) => {
        return (
        <div className="h-96 w-72 border mt-6 bg-[#FFF] shadow-[0px_2px_9px_0px_rgba(0, 0, 0, 0.05)] rounded-md">
          <img src={data.flags.svg} alt="flags of countries" />
          <h4 className="text-[#111517] text-lg font-extrabold mt-6">{data.name}</h4>
          <div className="mt-4">
            <p className="text-[#111517] text-sm font-semibold mt-px">
              Population: 
              {" "}
              <span className="text-[#111517] text-sm font-light">{data.population}</span>
            </p>
            <p className="text-[#111517] text-sm font-semibold mt-px text">
              Region: 
              {" "}
              <span className="text-[#111517] text-sm font-light">{data.region}</span>
            </p>
            <p className="text-[#111517] text-sm font-semibold mt-px">
              Capital: 
              {" "}
              <span className="text-[#111517] text-sm font-light">{data.capital}</span>
            </p>
          </div>
       </div>
        )
       })}
    </div>
  )
}

export default CountriesList