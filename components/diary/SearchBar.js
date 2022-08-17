import React from "react";
import { MdSearch } from "react-icons/md";
import styles from "../../styles/dailyDiary.module.css"
function SearchBar({ handleSearchNote }) {
  return (
    <div className={styles.searchbar}>
      <MdSearch className={styles.search__icon} size="1.3em" />
      <input
        onChange={(e) => handleSearchNote(e.target.value)}
        type="text"
        placeholder="Search your day"
      />
    </div>
  );
}

export default SearchBar;