export default function QuickChallenge() {
    const thingsArray = ['Thihg 1', 'THing 2']
    function addItem(){
        const count = thingsArray.length + 1
        thingsArray.push(`Thing ${count}`)
        console.log(thingsArray)
    }
    const showThingsArray = thingsArray.map((thing) =>{
        return <p key={thing}>{thing}</p>
    })
    return (
        <>
            <hr></hr>
            <button onClick={addItem}>Add Item</button>
            {showThingsArray}
        </>
    )
}