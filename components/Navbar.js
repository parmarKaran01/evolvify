import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className={styles.gpt3__navbar}>
      <div className={styles.gpt3__navbar_links}>
        <div className={styles.gpt3__navbar_links_logo}>
          <h1>Evolvify</h1>
        </div>
        <div className={styles.gpt3__navbar_links_container}>
          <Link href="/">
            <p>Home</p>
          </Link>
          <Link href="/dailyDiary">
            <p>Daily Diary</p>
          </Link>
          <Link href="/todoList">
            <p>Todo List</p>
          </Link>
          <Link href="/fitness">
            <p>Fitness</p>
          </Link>
        </div>
      </div>
      <div className={styles.gpt3__navbar_sign}>
        <Link href="/signin">
          <p>Sign in</p>
        </Link>
        <Link href="/signup">
          <button type="button">Sign up</button>
        </Link>
      </div>
      <div className={styles.gpt3__navbar_menu}>
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div
            className={`${styles.gpt3__navbar_menu_container} ${styles.scale_up_center}`}
          >
            <div className={styles.gpt3__navbar_menu_container_links}>
              <Link href="/">
                <p>Home</p>
              </Link>
              <Link href="/dailyDiary">
                <p>Daily Diary</p>
              </Link>
              <Link href="/todoList">
                <p>Todo List</p>
              </Link>
              <Link href="/fitness">
                <p>Fitness</p>
              </Link>
            </div>
            <div className={styles.gpt3__navbar_menu_container_links_sign}>
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
