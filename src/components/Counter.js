import React from 'react'
import styles from './Counter.module.css'

export const Counter = ({ time, number }) => {
    return (
        <div className={styles.counterContainer}>
            <span className={styles.counterNumber}>{number}</span>
            <div className={styles.counterTime}>
                {time}
            </div>
        </div>
    )
}
