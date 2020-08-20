import React from 'react'

export default function Screen({ equation, result }) {
    return (
        <div className="screen" id='display'>
            <div className="result-screen">
                {result}
            </div>
            <div className='computation-screen'>
                {equation}
            </div>
        </div>
    )
}
