import React, {Component} from 'react';

//Optimize Re-Renders with shouldComponentUpdate(freecodecamp)
class OnlyEvens extends Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Should I Update?');
        
        if(nextProps.value % 2 === 0) {
            return true;
        }   
    }

    componentDidUpdate() {
        console.log('Component re-rendered!');
    }

    render() {
        return <h1>{this.props.value}</h1>
    }
}
class Controller extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0
        };

        this.addValue = this.addValue.bind(this);
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
                <OnlyEvens value={this.state.value}/>
            </div>
        )
    }
}

export default Controller