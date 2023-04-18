import React from 'react'
import { Link } from 'react-router-dom'

function CountryCard({country}) {
  return (
    <div className='card d-flex w-25 bg-light'>
        <Link className='text-decoration-none' to={`/${country.alpha3Code}`} >
            <img className="card-img-top w-50" src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={country.name.common} ></img>
            <h3 className='text-dark' >{country.name.common}</h3>
        </Link>
    </div>
  )
}

export default CountryCard