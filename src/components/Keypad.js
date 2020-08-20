import React from 'react'

import Button from './Button'

export default function Keypad(props) {
    const zero = '0'
    const one = '1'
    const two = '2'
    const three ='3'
    const four = '4'
    const five = '5'
    const six = '6'
    const seven = '7'
    const eight = '8'
    const nine = '9'
    const decimal = '.'
    const add = '+'
    const subtract = '-'
    const multiply = '*'
    const divide = '/'
    const equals = '='
    const clear = 'AC'
    
    return (
        <div className='keypad'>
            <div className='keypad-row'>
                <Button type='large' onButtonPress={props.onButtonPress} id="clear">{clear}</Button>
                <Button type='large' onButtonPress={props.onButtonPress} id="divide">{divide}</Button>
            </div>
            <div className='keypad-row'>
                <Button onButtonPress={props.onButtonPress} id="seven">{seven}</Button>
                <Button onButtonPress={props.onButtonPress} id="eight">{eight}</Button>
                <Button onButtonPress={props.onButtonPress} id="nine">{nine}</Button>
                <Button onButtonPress={props.onButtonPress} id="multiply">{multiply}</Button>
            </div>
            <div className='keypad-row'>
                <Button onButtonPress={props.onButtonPress} id="four">{four}</Button>
                <Button onButtonPress={props.onButtonPress} id="five">{five}</Button>
                <Button onButtonPress={props.onButtonPress} id="six">{six}</Button>
                <Button onButtonPress={props.onButtonPress} id="subtract">{subtract}</Button>
            </div>
            <div className='keypad-row'>
                <Button onButtonPress={props.onButtonPress} id="one">{one}</Button>
                <Button onButtonPress={props.onButtonPress} id="two">{two}</Button>
                <Button onButtonPress={props.onButtonPress} id="three">{three}</Button>
                <Button onButtonPress={props.onButtonPress} id="add">{add}</Button>
            </div>
            <div className='keypad-row'>
                <Button type='large' onButtonPress={props.onButtonPress} id="zero">{zero}</Button>
                <Button onButtonPress={props.onButtonPress} id="decimal">{decimal}</Button>
                <Button type='large' onButtonPress={props.onButtonPress} id="equals">{equals}</Button>
            </div>
        </div>
    )
}
