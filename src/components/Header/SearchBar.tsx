import React from 'react'
import Form from 'react-bootstrap/Form'

import styles from './SearchBar.module.css'

const SearchBar = ({
  onSearch,
}: {
  onSearch: (countryName: string) => void
}) => {
  const onChangeHandler = (event: React.SyntheticEvent): void => {
    let target = event.target as HTMLInputElement
    onSearch(target.value)
  }

  return (
    <div className={styles.searchBar}>
      <Form>
        <Form.Control
          type="text"
          placeholder="Search country name"
          onChange={onChangeHandler}
        ></Form.Control>
      </Form>
      {/* <input
        type="text"
        placeholder="Search country name"
        onChange={onChangeHandler}
      /> */}
    </div>
  )
}

export default React.memo(SearchBar)
