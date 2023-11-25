import imgData from '../data/data'

export default function Generator() {
    let url
    function handleClick(){
        const memesArray = imgData.data.memes
        const randomNumber = parseInt(Math.random() * memesArray.length)
        url = memesArray[randomNumber].url
        console.log(url)
    }
    return (
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
            {url}
        </div>
    )
}