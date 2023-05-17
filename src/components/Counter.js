import React from 'react'
import './Counter.css'

export const Counter = ({ time, number }) => {
    return (
        <div className='counterContainer'>
            <span className='counterNumber'>{number}</span>
            <div className='counterTime'>
                {time}
            </div>
        </div>
    )
}
