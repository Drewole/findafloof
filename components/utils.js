import React from 'react'

//Handle the choice of the user
export const handleChoice = (direction) => {
    if (direction === 'left') {
        console.log("left")
        setDirection("left")
        nextAnimal()
        results.length === 0 ? getPets() : null
    } else if (direction === "right") {
        console.log("right")
        setDirection("right")
        addToFavs()
        nextAnimal()
        results.length === 0 ? getPets() : null
    }
}

const utils = () => {
    return (
        <div>

        </div>
    )
}

export default utils
