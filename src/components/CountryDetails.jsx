import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

function CountryDetails({ countries }) {
    const { alpha3Code } = useParams()
    const [ countrySelect , setCountrySelect ] = useState({})

    useEffect(() => {
        setCountrySelect(countries.find(country => alpha3Code === country.alpha3Code))
    },[])
    console.log(countries)

  return (
    <div>
    
        <p>Capital: {countrySelect.capital}</p>
        <p>Area: {countrySelect.area} km2</p>


    </div>
  )
}

export default CountryDetails