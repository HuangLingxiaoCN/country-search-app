import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { addCountry } from '../../redux/actions/countryAction'
import styles from './TableTr.module.css'

function TableTd(props: any) {
  const dispatch = useDispatch()
  const [buttonClick, setButtonClick] = useState(false)

  const clickHandler = () => {
    dispatch(addCountry(props.name))
    setButtonClick(true)
  }

  return (
    <tr className={styles['table-tr']}>
      <td>{props.flag}</td>
      <td>
        <Link to={`/country/${props.name}`}>{props.name}</Link>
      </td>
      <td>{props.population}</td>
      <td>{props.language}</td>
      <td>{props.region}</td>
      <td>
        <button onClick={clickHandler} disabled={buttonClick}>
          Add
        </button>
      </td>
    </tr>
  )
}

export default TableTd
