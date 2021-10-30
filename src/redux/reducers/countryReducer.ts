/* eslint-disable indent */
import {
  FETCH_COUNTRIES_REQUEST,
  ADD_COUNTRY,
  REMOVE_COUNTRY,
  CountryState,
} from '../../types'

const initialState: CountryState = {
  countries: [],
  countriesInFavoriteAmount: 0,
  countriesInFavorite: [],
}

const countryReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_COUNTRIES_REQUEST:
      return {
        ...state,
        countries: action.payload,
      }

    case ADD_COUNTRY:
      // Add a country to Favorite
      const addedCountry = state.countries.find(
        (country) => country.name.official === action.payload
      )
      return {
        ...state,
        countriesInFavoriteAmount: state.countriesInFavoriteAmount + 1,
        countriesInFavorite: [...state.countriesInFavorite, addedCountry],
      }

    case REMOVE_COUNTRY:
      const removedCountry = state.countries.find(
        (country) => country.name.official === action.payload
      )
      return {
        ...state,
        countriesInFavoriteAmount: state.countriesInFavoriteAmount - 1,
        countriesInFavorite: state.countriesInFavorite.filter(
          (country) => country.name.official !== removedCountry.name.official
        ),
      }

    default:
      return state
  }
}

export default countryReducer
