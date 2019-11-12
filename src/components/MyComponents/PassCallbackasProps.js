import React, {Component} from 'react';

//Pass a Callback as Props(freecodecamp)
class MyApplication extends Component {
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
        this.setState({
            submit: this.state.input
        });
    }

    render() {
        return(
            <div>
                <h2>Pass a Callback as Props</h2>
                <GetInput input={this.state.input} handleChange={this.handleChange}/>
                <RenderInput input={this.state.input}/>
                <SubmitInput handleSubmit={this.handleSubmit} input={this.state.submit}/>
            </div>
        )
    }
}

class GetInput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h3>Get Input:</h3>
                <input value={this.props.input} onChange={this.props.handleChange} />
            </div>
        )
    }
}

class RenderInput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h3>Input Render:</h3>
                <p>{this.props.input}</p>
            </div>
        )
    }
}

class SubmitInput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <button onClick={this.props.handleSubmit}>Submit</button>
                <p>{this.props.input}</p>
            </div>
        )
    }
}

export default MyApplication