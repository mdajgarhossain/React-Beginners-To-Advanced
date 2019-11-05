import React from 'react';

//Use React to Render Nested Components(freecodecamp)
const TypesOfFruit = () => {
    return (
        <div>
            <ul>
                <li>Mangoes</li>
                <li>Apples</li>
                <li>Blueberries</li>
                <li>Strawberries</li>
                <li>Bananas</li>
            </ul>
        </div>
    )
}

const Fruits = () => {
    return (
        <div>
            <h1>Fruits:</h1>
            <TypesOfFruit />
        </div>
    )
}

const TypesOfFood = () => {
    return (
        <div>
            <h1>Types Of Food:</h1>
            <Fruits />
        </div>
    )
}

export default TypesOfFood