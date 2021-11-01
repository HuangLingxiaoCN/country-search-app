import React, { useCallback, useState, useEffect, useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Button from 'react-bootstrap/Button'

import { AppState } from '../types'
import TableComponent from '../components/Table/TableComponent'
import Header from '../components/Header/Header'
import { ThemeContext } from '../context/themeContext'
import { fetchCountries } from '../redux/actions/countryAction'

const tableHeader = ['Flag', 'Name', 'Population', 'Language', 'Region']

const countryImg = {
  width: '5rem',
}

function setCountryData(data: any) {
  const countryData: any = []

  data.forEach((country: any) => {
    countryData.push({
      flag: (
        <img
          src={country.flags.svg}
          alt={country.name.official}
          style={countryImg}
        />
      ),
      name: country.name.official,
      population: country.population,
      language: country.languages
        ? Object.values(country.languages).map((lan: any) => (
          <li key={lan}>{lan}</li>
        ))
        : '',
      region: country.continents[0],
    })
  })

  return countryData
}

export default function Home() {
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()
  const themeCtx = useContext(ThemeContext)
  const data = useSelector((state: AppState) => state.country.countries)

  useEffect(() => {
    dispatch(fetchCountries())
  }, [dispatch])
  const countryData = setCountryData(data)

  const setSearchHandler = useCallback((countryName: string) => {
    setSearch(countryName)
  }, [])

  const filteredCountries = countryData.filter((country: any) => {
    return country.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <>
      <Header onSearch={setSearchHandler} />
      <div>
        <Button variant="primary" onClick={() => themeCtx.setBlueTheme()}>
          Blue Theme
        </Button>
        <Button variant="success" onClick={() => themeCtx.setGreenTheme()}>
          Green Theme
        </Button>
        <Button variant="danger" onClick={() => themeCtx.setRedTheme()}>
          Red Theme
        </Button>
        <TableComponent
          tableHeader={tableHeader}
          tableData={filteredCountries}
        />
      </div>
    </>
  )
}
