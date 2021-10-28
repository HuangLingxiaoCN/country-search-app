import { Dispatch } from 'redux'

import { FETCH_COUNTRIES_REQUEST, Country } from "../../types";

export const fetchCountriesRequest = (countries: Country) => {
  return { 
    type: FETCH_COUNTRIES_REQUEST,
    payload: countries
  }
}

// thunk
export const fetchCountries = () => {
  return (dispatch: Dispatch) => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => {
        const countries = data
        dispatch(fetchCountriesRequest(countries))
      })
  }
}