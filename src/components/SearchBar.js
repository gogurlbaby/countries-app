import React, { useState, useContext, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { CountriesListContext } from "../context/CountriesContext";
import { ContextTheme } from "../context/ThemeContext";
import axios from "axios";

const SearchBar = () => {
  const { darkTheme } = useContext(ContextTheme);
  const { setCountries } = useContext(CountriesListContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedContinent, setSelectedContinent] = useState("Filter by Region");
  
  const fetchCountries = async () => {
    try {
      let url = `https://restcountries.com/v3.1/all`;

      if (selectedContinent !== "Filter by Region") {
        url = `https://restcountries.com/v3.1/region/${selectedContinent}`;
      }

      const response = await axios.get(url);
      let filteredCountries = response.data;

      if (searchTerm) {
        filteredCountries = filteredCountries.filter((country) =>
          country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      setCountries(filteredCountries);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  useEffect(() => {
    fetchCountries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedContinent, searchTerm, setCountries]);

  return (
    <div className="md:flex md:justify-between md:items-center md:mt-[4.5rem] mt-14">
      <div className={`${
        darkTheme ? "bg-[#2B3844] text-white" : "bg-white text-[#848484]"} 
        md:w-[40%] w-full shadow-[0px_2px_9px_0px_rgba(0, 0, 0, 0.05)] gap-6 flex rounded-md`}>
        <AiOutlineSearch 
         size={25} 
         className="text-[#B2B2B2] relative top-4 ml-4" 
        />
        <input
          type="text"
          name="countries"
          placeholder="Search for a country…"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={`${
            darkTheme ? "bg-[#2B3844] text-white" : "bg-white text-[#111517]"} 
            w-full rounded-md py-4 outline-none`}
        />
      </div>
      <div className="md:mr-0 mr-[20rem]">
        <select
          value={selectedContinent}
          onChange={(e) => setSelectedContinent(e.target.value)}
          className={`${
            darkTheme ? "bg-[#2B3844] text-white" : "bg-white text-[#111517]"}
            shadow-[0px_2px_9px_0px_rgba(0, 0, 0, 0.05)] rounded-md md:mt-0 mt-10 py-4 px-5 outline-none`}
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
    </div>
  );
};

export default SearchBar;
