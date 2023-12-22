import React, { createContext, useEffect, useState } from "react"
import axios from "axios"

export const CountriesListContext = createContext()
const CountriesContext = ({ children }) => {
    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://restcountries.com/v3.1/all")
                setCountries(response.data)
                setLoading(false)
            } catch (error) {
                console.log("Error fetching data", error)
                setLoading(false)
            }
        }

        fetchData()
    }, [])
  return (
    <CountriesListContext.Provider value={{ countries, setCountries, loading }}>
        {children}
    </CountriesListContext.Provider>
  )
}

export default CountriesContext