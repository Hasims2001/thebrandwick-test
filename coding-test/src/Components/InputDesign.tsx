import React from 'react'
import styles from "../Styles/InputDesign.module.css"
interface InputDesignProps {
    typed: string,
    named: string,
    placeHolder: string,
    Error?: string
}
export const InputDesign = ({typed, named, placeHolder, Error}:InputDesignProps) => {
  return (
    <div>
    <input type={typed} name={named} placeholder={placeHolder} required className={styles.inputBox}></input>
     <br />
    {Error && <span style={{textAlign:'left', paddingLeft:'.4rem', color: 'red'}}>{Error}</span>}
    </div>
  )
}
