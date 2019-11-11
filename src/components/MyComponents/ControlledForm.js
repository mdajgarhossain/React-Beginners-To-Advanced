import React, {Component} from 'react';

//Create a Controlled Form(freecodecamp)
class MyForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: '',
            submit: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({
            submit: this.state.input
        });
    }

    render() {
        return(
            <div>
                <h3>Create a Controlled Form</h3>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.input} onChange={this.handleChange} />
                    <button type='submit'>Submit</button>
                </form>
                <h1>{this.state.submit}</h1>
            </div>
        )
    }
}

export default MyForm