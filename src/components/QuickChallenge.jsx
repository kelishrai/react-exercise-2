import React, {useState} from 'react'

export default function QuickChallenge() {
    const [value,setValue] = useState(0)
    function plus(){
        setValue((prevValue) => prevValue + 1)
    }
    function minus(){
        setValue(value-1)
    }
    return (
        <>
            <button onClick={plus}>+</button>
            <h1>{value}</h1>
            <button onClick={minus}>-</button>
        </>
    )
}