import React from 'react';

//Pass an Array as Props(freecodecamp)
const Lists = ({tasks}) => {
    return(
        <div>
            <p>{tasks.join(', ')}</p>
        </div>
    )
}

const ToDo = () => {
    return(
        <div>
            <h1>To Do Lists</h1>
            <h2>Today</h2>
            <Lists tasks={['Prayer', 'Coding']}/>
            <h2>Tomorrow</h2>
            <Lists tasks={['Prayer', 'Coding', 'Eating', 'Sleeping']}/>
        </div>
    )
}

export default ToDo