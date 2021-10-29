import React from 'react'

import styles from './Header.module.css'
import SearchBar from './SearchBar'
import HeaderCartButton from './HeaderCartButton'

function Header({ onSearch }: { onSearch: any }) {
  return (
    <header className={styles.header}>
      <h1>All Country</h1>
      <SearchBar onSearch={onSearch} />
      <HeaderCartButton />
    </header>
  )
}

export default Header
