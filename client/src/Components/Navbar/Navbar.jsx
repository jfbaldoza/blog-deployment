import React from 'react'
import styles from '../Navbar/Navbar.module.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className={styles.app__navbar}>
            <h1>Daily Scribbler</h1>
            <ul className={styles.app__navbar_middle}>
                <li><Link to={"/blog-app/home"}>Home</Link></li>
                <li><Link to={"/blog-app/write"}>Write a blog</Link></li>
            </ul>
            <ul className={styles.app__navbar_right}>
                <li><Link className={styles.app__navbar_btn1} to={"/blog-app/logout"}>Log Out</Link></li>
            </ul>
        </div>
    )
}

export default Navbar