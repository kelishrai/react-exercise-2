import React, {useState} from 'react'

export default function QuickChallenge() {
    let thingsArray = ["Thing 1 ","Thing 2 "]
    const [thingsArrayState,setThingsArrayState] = useState(thingsArray)
    function changeThingsArrayState(){
        setThingsArrayState((prevThingsArrayState) => {
            return [...prevThingsArrayState,`Thing ${prevThingsArrayState.length + 1} `]
            }
        )
    }
    return (
        <>
            <button onClick={changeThingsArrayState}>Add Thing</button>
            <h1>{thingsArrayState}</h1>
        </>
    )
}