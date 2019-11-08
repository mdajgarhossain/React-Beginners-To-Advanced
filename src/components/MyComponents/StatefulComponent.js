import React, {Component} from 'react';

//Create a Stateful Component(freecodecomp)
class StatefulComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'A.H. Jewell'
        }
    }

    render() {
        return(
            <div>
                <h2>My name is: {this.state.name}</h2>
            </div>
        )
    }
}

export default StatefulComponent