import React from 'react'

const Button = ({children, onClick: handleClick}) => (
    <button className="primary-button" onClick={handleClick} >
        {
            children
        }
    </button>
)

export {Button}