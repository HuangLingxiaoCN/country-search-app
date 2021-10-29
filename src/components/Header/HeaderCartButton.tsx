import React from 'react'

import { useSelector } from 'react-redux'
import { AppState } from '../../types'

function HeaderCartButton() {
  const amountInCart = useSelector((state: AppState) => state.country.countriesInCartAmount)

  return (
    <button>
      <span>Your Cart</span>
      <span>{amountInCart}</span>
    </button>
  )
}

export default HeaderCartButton
