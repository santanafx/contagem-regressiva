import React from 'react'
import styles from './Title.module.css'

export const Title = ({ title }) => {
    return (
        <div className={styles.titleContainer}>
            <h1>{title}</h1>
        </div>
    )
}
