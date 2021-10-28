// Action types
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'

export const FETCH_COUNTRIES_REQUEST = 'FETCH_COUNTRIES_REQUEST'
export const ADD_COUNTRY = 'ADD_COUNTRY'
export const REMOVE_COUNTRY = 'REMOVE_COUNTRY'

export type FetchCountriesAction = {
  type: typeof FETCH_COUNTRIES_REQUEST
  payload: {
    country: Country[],
  }
}

// Country
export type Country = {
  flag:  JSX.Element | any,
  name: string | any,
  population: number | any,
  language: JSX.Element[] | string | any,
  region: string | any,
} | any


// A product
export type Product = {
  id: string
  name: string
  price: number
}

export type AddProductAction = {
  type: typeof ADD_PRODUCT
  payload: {
    product: Product
  }
}

export type RemoveProductAction = {
  type: typeof REMOVE_PRODUCT
  payload: {
    product: Product
  }
}

// Use this union in reducer
export type ProductActions = AddProductAction | RemoveProductAction

export type ProductState = {
  inCart: Product[]
}

export type CountryState = {
  countries: Country[]
}

export type AppState = {
  product: ProductState
  country: CountryState
}


