import React from "react";

import styles from "./SearchBar.module.css";

const SearchBar = ({
  onSearch,
}: {
  onSearch: (countryName: string) => void;
}) => {
  const onChangeHandler = (event: React.SyntheticEvent): void => {
    let target = event.target as HTMLInputElement;
    onSearch(target.value);
  };

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="Search country name"
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default React.memo(SearchBar);
