import React from 'react';

//Use React to Render Nested Components(freecodecamp)
//Compose React Components(freecodecamp)
const NonCitrus = () => {
    return (
        <div>
            <h3>Non-Citrus</h3>
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

const Citrus = () => {
    return (
        <div>
            <h3>Citrus</h3>
            <ul>
                <li>Lemon</li>
                <li>Lime</li>
                <li>Orange</li>
                <li>Grapefruit</li>
                
            </ul>
        </div>
    )
}

const TypesOfFruit = () => {
    return (
        <div>
            <NonCitrus />
            <Citrus />
        </div>
    )
}

const Fruits = () => {
    return (
        <div>
            <h2>Fruits:</h2>
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