import React from 'react'
import MenuItem from '../../atoms/MenuItem'
import styles from './styles.module.css'

const MenuPpal = () => {
    return (
        <nav className={styles.headerMenuWrapper}>
            <ul className={styles.headerMenu}>
                <MenuItem textItem='INICIO' />
                <MenuItem textItem='RECURSOS' />
                <MenuItem textItem='PRODUCTOS' />
                <MenuItem textItem='CONTACTO' />
                <MenuItem textItem='REGISTRO' />
            </ul>
        </nav>
    )
}

export default MenuPpal
