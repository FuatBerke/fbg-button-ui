import React from 'react'
import styles from './styles.module.css'

export const Button = (props) => {
  const buttonClasses = `${styles[props.color]} ${styles[props.type]}`
  return (
    <button {...props} className={buttonClasses}>
      {props.text}
    </button>
  )
}
