import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { AppState } from '../types'

const countryImg = {
  width: '5rem',
}

function CountryPage() {
  const { name } = useParams<{ name: string }>()

  const AllCountry = useSelector((state: AppState) => state.country.countries)
  const country = AllCountry.find((n) => n.name.official === name)

  console.log(country)
  if (!country) {
    return (
      <div>
        <h2>No country found</h2>
      </div>
    )
  }

  return (
    <div>
      <h2>Country Page</h2>
      <h3>Official Name: {country.name.official}</h3>
      <img
        src={country.flags.svg}
        alt={country.name.official}
        style={countryImg}
      />
      <h3>Population: {country.population}</h3>
      <h3>
        Languages: 
        {country.languages
          ? Object.values(country.languages).map((lan: any) => (
            <li key={lan}>{lan}</li>
          ))
          : ''}
      </h3>
      <h3>Regions: {country.continents[0]}</h3>
    </div>
  )
}

export default CountryPage
