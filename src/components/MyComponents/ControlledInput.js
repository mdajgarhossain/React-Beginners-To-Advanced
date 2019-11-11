import React, {Component} from 'react';

//Create a Controlled Input(freecodecamp)
class ControlledInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        })
    }

    render() {
        return(
            <div>
                <h3>Create a Controlled Input</h3>
                <input value={this.state.input} onChange={this.handleChange}></input>
                <h3>Controlled Input:</h3>
                <p>{this.state.input}</p>
            </div>
        )
    }
}

export default ControlledInput