import React from 'react';

//Pass Props to a Stateless Functional Component(freecodecamp)
const CurrentDate = (props) => {
    return(
        <div>
            <h4>The current date is: {props.date}</h4>
        </div>
    )
}

const Calendar = () => {
    return(
        <div>
            <h3>What date is it?</h3>
            <CurrentDate date={Date()}/>
        </div>
    )
}

export default Calendar