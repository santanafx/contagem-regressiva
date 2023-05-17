import React from 'react'

export const Counter = ({ time, number }) => {
    return (
        <div>
            <span>{time}</span>
            <div>
                {number}
            </div>
        </div>
    )
}
