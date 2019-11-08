import React from 'react';

//Render State in the User Interface Another Way(freecodecamp)

class MyStatefulComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            courseName: 'React-Redux',
            courseDuration: 2
        }
    }

    render() {
        
        const duration = this.state.courseDuration

        return(
            <div>
                <h1>Course Name: {this.state.courseName}</h1>
                <h1>Course Duration: {this.state.courseDuration} days</h1>
            </div>
        )
    }
}

export default MyStatefulComponent