import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { AppState } from '../types'
import { removeCountry } from '../redux/actions/countryAction'

const countryImg = {
  width: '5rem',
}

function Favorite() {
  const dispatch = useDispatch()
  const countriesInFavorite = useSelector(
    (state: AppState) => state.country.countriesInFavorite
  )

  return (
    <div>
      {countriesInFavorite.map((country) => (
        <li key={country.name.official}>
          <img
            src={country.flags.svg}
            alt={country.name.common}
            style={countryImg}
          />
          <span>{country.name.official}</span>
          <span>
            <button
              onClick={() => dispatch(removeCountry(country.name.official))}
            >
              Remove
            </button>
          </span>
        </li>
      ))}
    </div>
  )
}

export default Favorite
