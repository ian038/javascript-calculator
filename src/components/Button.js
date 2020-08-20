import React from 'react'

export default function Button(props) {
    const classes = ['btn']

    if(typeof props !== 'undefined' && typeof props.type !== 'undefined') {
        classes.push('btn--' + props.type)
    }

    return (
        <button className={classes.join(' ')} onClick={props.onButtonPress} id={props.id}>
            {props.children}
        </button>
    )
}
