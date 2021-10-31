import React, { useContext } from 'react'

import styles from './Header.module.css'
import SearchBar from './SearchBar'
import HeaderCartButton from './HeaderCartButton'
import { ThemeContext } from '../../context/themeContext'

function Header({ onSearch }: { onSearch: any }) {
  const ctx = useContext(ThemeContext)

  return (
    <header className={styles.header} style={ctx.themeColor}>
      <h1>All Country</h1>
      <SearchBar onSearch={onSearch} />
      <HeaderCartButton />
    </header>
  )
}

export default Header
