import React from "react";
import styles from "../../styles/dailyDiary.module.css"

function Header({ handleDarkMode, mode }) {
  return (
    <div className={styles.header}>
      <h1>DAILY DIARY</h1>
      <button
        onClick={() => handleDarkMode((prevMode) => !prevMode)}
        className={styles.save}
      >
        {" "}
        Enter {mode ? "Light" : 'Dark'} Mode
      </button>
    </div>
  );
}

export default Header;