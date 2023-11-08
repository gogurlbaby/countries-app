import React, { useState } from "react"
import { AiOutlineSearch } from "react-icons/ai"

const SearchBar = () => {

    const [selectedOption, setSelectedOption] = useState("Filter by Region")

    const options = [ "Filter by Region", "Africa", "America", "Asia", "Europe", "Oceania"]

  return (
    <div className="md:flex md:justify-between md:items-center md:mt-[4.5rem] mt-14">
      <div className="w-full bg-[#FFF] shadow-[0px_2px_9px_0px_rgba(0, 0, 0, 0.05)] gap-6 flex rounded-md">
       <AiOutlineSearch size={25} className="text-[#B2B2B2] relative top-4 ml-4"/>
       <input
        type="text"
        name="countries"
        placeholder="Search for a country…"
       //   value={}
       // onChange={}
        className="w-full bg-[#FFF] rounded-md py-4 outline-none"
      />
     </div>
     <div className="md:mr-0 mr-[20rem]">
      <select
       value={selectedOption}
       onChange={(e) => setSelectedOption(e.target.value)}
       className="bg-[#FFF] shadow-[0px_2px_9px_0px_rgba(0, 0, 0, 0.05)] border rounded-md md:mt-0 mt-10 py-4 px-5 outline-none"
      >
      {options.map((option, index) => (
        <option
         key={index}
         value={option}
         className="text-left outline-none border-none"
        >
         {option}
        </option>
      ))}
      </select>
     </div>
    </div>
  )
}

export default SearchBar