import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './App.css';
import countriesJson from './countries.json'
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

import axios from 'axios';

function App() {
  const [countries, setCountries] = useState([])
  

  useEffect(() => {
    axios.get('https://ih-countries-api.herokuapp.com/countries')
    .then(res => {
      console.log(res.data)
      setCountries(res.data)
    })

  }, [])




  return (
    <div className="App">
    <NavBar />

    <Routes>
      <Route path='/' element={<CountriesList countries={countries} />} />
      <Route path='/:alpha3Code' element={<CountryDetails countries={countries} />} />
      
    </Routes>
    
    </div>
  );
}

export default App;
