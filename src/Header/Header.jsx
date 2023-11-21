import React from 'react'
import styles from './Header.css'
const Header = () => {
  return (
    <div className={styles.navbar}>
        <div className={styles.nav__left}>
            <div className={styles.nav__left__logo}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOS9FBvaVpblYaYC35Gtsp8J9K2JG6rthwmg&usqp=CAU' alt="" />
                
            </div>
        </div>
        <div className={styles.nav__right}>
            <ul>
                <li>HOME</li>
                <li>ABOUT</li>
            </ul>
        </div>
    </div>
  )
}
export default Header