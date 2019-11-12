import React from 'react';

//Twinkle Cats: Stateless Component
const StatelessComponent = (props) => {
    return(
        <div>
            <h2>I am a Stateless Component</h2>
            <h5>Is State exists: {props.value}</h5>
            <p>Developed By {props.name}</p>
        </div>
    )
}

StatelessComponent.defaultProps = {name: 'AJgar'};

export default StatelessComponent