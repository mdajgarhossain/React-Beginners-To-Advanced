import React from 'react';

//1st approach
// const Person = (props) => {
//     const {name, age, profession} = props
//     return(
//         <div>
//             <h3>Name: {name}</h3>
//             <p>Age: {age}</p>
//             <p>Profession: {profession}</p>
//         </div>
//     )
// }

//2nd approach
const Person = ({name, age, profession}) => {
    return(
        <div>
            <h3>Name: {name}</h3>
            <p>Age: {age}</p>
            <p>Profession: {profession}</p>
        </div>
    )
}

export default Person