import React from 'react'
import { Link } from 'react-router-dom'

function TableTd(props: any) {
  return <tr>
    <td>{props.flag}</td>
    <td><Link to={`/country/${props.name}`}>{props.name}</Link></td>
    <td>{props.population}</td>
    <td>{props.language}</td>
    <td>{props.region}</td>
  </tr>
}

export default TableTd
