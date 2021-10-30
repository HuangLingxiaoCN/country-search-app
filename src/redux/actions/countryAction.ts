import { Dispatch } from 'redux'

import {
  FETCH_COUNTRIES_REQUEST,
  ADD_COUNTRY,
  Country,
  REMOVE_COUNTRY,
} from '../../types'

export const fetchCountriesRequest = (countries: Country) => {
  return {
    type: FETCH_COUNTRIES_REQUEST,
    payload: countries,
  }
}

export const addCountry = (countryName: string) => {
  return {
    type: ADD_COUNTRY,
    payload: countryName,
  }
}

export const removeCountry = (countryName: string) => {
  return {
    type: REMOVE_COUNTRY,
    payload: countryName,
  }
}

// thunk
export const fetchCountries = () => {
  return (dispatch: Dispatch) => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => {
        const countries = data
        dispatch(fetchCountriesRequest(countries))
      })
  }
}
