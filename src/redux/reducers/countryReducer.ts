/* eslint-disable indent */
import { FETCH_COUNTRIES_REQUEST } from '../../types'

const initialState = {
  countries: [],
}

const countryReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_COUNTRIES_REQUEST:
      return {
        ...state,
        countries: action.payload,
      }

    default:
      return state
  }
}

export default countryReducer;