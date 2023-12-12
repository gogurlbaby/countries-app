import React, { useState, useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { CountriesListContext } from "../context/CountriesContext";

const SearchBar = () => {
  const { countries } = useContext(CountriesListContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedContinent, setSelectedContinent] = useState("Filter by Region");

  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name.common.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesContinent =
      selectedContinent === "Filter by Region" || country.region === selectedContinent;

    return matchesSearch && matchesContinent;
  });

  return (
    <div className="md:flex md:justify-between md:items-center md:mt-[4.5rem] mt-14">
      <div className="w-full bg-[#FFF] shadow-[0px_2px_9px_0px_rgba(0, 0, 0, 0.05)] gap-6 flex rounded-md">
        <AiOutlineSearch size={25} className="text-[#B2B2B2] relative top-4 ml-4" />
        <input
          type="text"
          name="countries"
          placeholder="Search for a country…"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-[#FFF] rounded-md py-4 outline-none"
        />
      </div>
      <div className="md:mr-0 mr-[20rem]">
        <select
          value={selectedContinent}
          onChange={(e) => setSelectedContinent(e.target.value)}
          className="bg-[#FFF] shadow-[0px_2px_9px_0px_rgba(0, 0, 0, 0.05)] border rounded-md md:mt-0 mt-10 py-4 px-5 outline-none"
        >
          {["Filter by Region", "Africa", "America", "Asia", "Europe", "Oceania"].map(
            (option, index) => (
              <option key={index} value={option} className="text-left outline-none border-none">
                {option}
              </option>
            )
          )}
        </select>
      </div>
      {/* You can render the total count of matching countries, or any other UI you'd like */}
      <p>Total matching countries: {filteredCountries.length}</p>
    </div>
  );
};

export default SearchBar;
