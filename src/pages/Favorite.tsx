import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'

import { AppState } from '../types'
import { removeCountry } from '../redux/actions/countryAction'

const countryImg = {
  width: '5rem',
}

function Favorite() {
  const dispatch = useDispatch()
  const countriesInFavorite = useSelector(
    (state: AppState) => state.country.countriesInFavorite
  )

  return (
    <div>
      <ListGroup as="ol" numbered>
        {countriesInFavorite.map((country) => (
          <ListGroup.Item as="li" key={country.name.official}>
            <img
              src={country.flags.svg}
              alt={country.name.common}
              style={countryImg}
            />
            <span>{country.name.official}</span>
            <span>
              <Button
                onClick={() => dispatch(removeCountry(country.name.official))}
              >
                Remove
              </Button>
            </span>
          </ListGroup.Item>
          // <li key={country.name.official}>
          //   <img
          //     src={country.flags.svg}
          //     alt={country.name.common}
          //     style={countryImg}
          //   />
          //   <span>{country.name.official}</span>
          //   <span>
          //     <button
          //       onClick={() => dispatch(removeCountry(country.name.official))}
          //     >
          //       Remove
          //     </button>
          //   </span>
          // </li>
        ))}
      </ListGroup>
      <Button variant="link">
        <Link to="/">Back</Link>
      </Button>
    </div>
  )
}

export default Favorite
