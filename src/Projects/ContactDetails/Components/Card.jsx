import React from 'react';
import styles from "./Card.module.css";

const Card = ({user}) => {
    console.log(user);
  return (
    <div className={styles.card_Container}>
        <div className={styles.img_container}>
            <img src={user.avatar} alt="avatar" />
        </div>
        <div className={styles.details_container}>
            <p>Full Name - &nbsp;<span>{`  ${user.first_name}${user.last_name}`}</span></p>
            <p>Email - &nbsp;<span>{`  ${user.email}`}</span></p>
        </div>
    </div>
  )
}

export default Card