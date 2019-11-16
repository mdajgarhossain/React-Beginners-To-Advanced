import React, {Component} from 'react';

//Optimize Re-Renders with shouldComponentUpdate(freecodecamp)
class Controller extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0
        };

        this.addValue = this.addValue.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextState.value % 2 === 0) {
            return true;
        }   
    }

    addValue() {
        this.setState({
            value: this.state.value + 1
        });
    }

    render() {
        return(
            <div>
                <button onClick={this.addValue}>Add</button>
                <h1>{this.state.value}</h1>
            </div>
        )
    }
}

export default Controller