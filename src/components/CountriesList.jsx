import React, { useState, useEffect } from 'react'
import CountryCard from './CountryCard'

function CountriesList({countries}) {
    
  return (
    <div className='d-flex flex-column align-item-center'>
        {countries.map((country) => {
            return <div key={country.alpha3Code}>
                <CountryCard country={country} />
            </div>
        })}

    </div>
  )
}

export default CountriesList