import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { AppState } from '../../types'

function HeaderCartButton() {
  const amountInCart = useSelector(
    (state: AppState) => state.country.countriesInFavoriteAmount
  )

  return (
    <button>
      <Link to="/favorite">
        <span>Your Favorite</span>
        <span>{amountInCart}</span>
      </Link>
    </button>
  )
}

export default HeaderCartButton
