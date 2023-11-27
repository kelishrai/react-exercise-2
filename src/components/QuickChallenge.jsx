import React from 'react'
import boxes from '../data/boxes'

function Box(props){
    let isDarkMode = props.fill
    const borderRadiusAmount = "10px"
    const myDivStyle = {
        display: "inline-block",
        height: "100px", 
        width: "100px", 
        border: "1px solid white", 
        margin: "4px",
        backgroundColor: isDarkMode ? "#222222" : "#cccccc",
        borderRadius: borderRadiusAmount
    }
    return(
        <div style={myDivStyle}></div>
    )
}

export default function QuickChallenge() {
    const [boxState,setBoxState] = React.useState(boxes)
    const boxDisplay = boxState.map((box) => (
        <Box key={box.id} fill={box.on}/>
    ))

    return (
        <main id="quick-challenge">
            {boxDisplay}
        </main>
    )
}