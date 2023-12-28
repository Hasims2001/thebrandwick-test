import React from 'react'
import styles from '../Styles/ButtonDesign.module.css';
interface ButtonDesignProps{
    typed:"submit" | "reset" | "button" | undefined,
    handleClick?: React.FC,
    valued: string
}
export const ButtonDesign = ({typed, handleClick, valued}:ButtonDesignProps) => {
  return (
    <button type={typed} onClick={handleClick} className={styles.btn}>{valued}</button>
  )
}
