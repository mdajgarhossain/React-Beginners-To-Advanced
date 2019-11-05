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

const Vegetables = () => {
    return (
        <div>
            <h2>Vegetables</h2>
            <ul>
                <li>Brussel Sprouts</li>
                <li>Broccoli</li>
                <li>Squash</li>
            </ul>
        </div>
    )
}

const TypesOfFood = () => {
    return (
        <div>
            <h1>Types Of Food:</h1>
            <Fruits />
            <Vegetables />
        </div>
    )
}

export default TypesOfFood