import React from 'react'
import './Title.css'

export const Title = ({ title }) => {
    return (
        <div className='titleContainer'>
            <h1>{title}</h1>
        </div>
    )
}
