/* eslint-disable indent */
import { FETCH_COUNTRIES_REQUEST, ADD_COUNTRY } from '../../types'

const initialState = {
  countries: [],
  countriesInCartAmount: 0,
  countriesInCart: []
}

const countryReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_COUNTRIES_REQUEST:
      return {
        ...state,
        countries: action.payload,
      }

    case ADD_COUNTRY:
      // Add a country to cart
      return {
        ...state,
        countriesInCartAmount: state.countriesInCartAmount + 1
      }
    
    default:
      return state
  }
}

export default countryReducer;