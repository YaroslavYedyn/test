import React from 'react'
import {Link} from "react-router-dom";
import styles from './header.module.css'

export const Header = () => {
    return (
        <header>
            <p className={styles.title}>Logo</p>
            <nav>
                <Link className={styles.link} to='/'>home</Link>
                <Link className={styles.link} to='/create'>create</Link>
                <Link className={styles.link} to='/about'>about</Link>
            </nav>
            <p>My account</p>
        </header>
    )
}
