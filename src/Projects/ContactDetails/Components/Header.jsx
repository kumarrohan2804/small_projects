import React from 'react';
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
        <h1>Details of the Employee</h1>
        <div className={styles.links_container}>
            <ul>
                <li>About</li>
                <li>Home</li>
                <li>Contact Us</li>
            </ul>
        </div>
    </div>
  )
}

export default Header