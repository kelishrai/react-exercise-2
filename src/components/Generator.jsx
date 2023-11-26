import imgData from '../data/data'
import React from 'react'

export default function Generator() {
    const [url, setUrl] = React.useState('')
    function handleClick(){
        const memesArray = imgData.data.memes
        const randomNumber = parseInt(Math.random() * memesArray.length)
        const newUrl = memesArray[randomNumber].url
        setUrl(newUrl)
    }
    return (
        <main id="main">
            <div id="generating-form">
                <input 
                    type="text" 
                    id="first-input"
                    placeholder="Top text"
                ></input>
                <input 
                    type="text" 
                    id="second-input"
                    placeholder="Bottom text"
                ></input>
                <button id="submit-button" onClick={handleClick}>Generate The Meme!</button>
            </div>
            <img src={url} id="meme-img"/>
        </main>
    )
}