import React from 'react'
import styles from './styles.module.css'

const MenuItem = ({textItem}) => {
  return (
    <li className={styles.headerMenuItem}>{textItem}</li>
  )
}

export default MenuItem
