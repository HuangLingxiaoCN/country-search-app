import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

import { AppState } from '../../types'

function HeaderCartButton() {
  const amountInCart = useSelector(
    (state: AppState) => state.country.countriesInFavoriteAmount
  )

  return (
    <Button variant="secondary">
      <Link to="/favorite">
        <span>Your Favorite - {amountInCart}</span>
      </Link>
    </Button>
  )
}

export default HeaderCartButton
