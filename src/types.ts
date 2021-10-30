// Action types
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'

export const FETCH_COUNTRIES_REQUEST = 'FETCH_COUNTRIES_REQUEST'
export const ADD_COUNTRY = 'ADD_COUNTRY'
export const REMOVE_COUNTRY = 'REMOVE_COUNTRY'

export type FetchCountriesAction = {
  type: typeof FETCH_COUNTRIES_REQUEST
  payload: {
    country: Country[]
  }
}

// Country
export type Country =
  | {
      flag: JSX.Element | any
      name: string | any
      population: number | any
      language: JSX.Element[] | string | any
      region: string | any
    }
  | any

export type AddCountryAction = {
  type: typeof ADD_COUNTRY
  payload: {
    country: Country
  }
}

export type RemoveCountryAction = {
  type: typeof REMOVE_COUNTRY
  payload: {
    country: Country
  }
}

export type CountryActions = AddCountryAction

export type CountryState = {
  countries: Country[]
  countriesInFavoriteAmount: number
  countriesInFavorite: Country[]
}

export type AppState = {
  // product: ProductState
  country: CountryState
}
