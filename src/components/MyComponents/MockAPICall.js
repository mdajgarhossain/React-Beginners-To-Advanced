import React, {Component} from 'react';

//Use the Lifecycle Method componentDidMount(freecodecamp)
class MockAPI extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeUsers: null,
            color: 'black'
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                activeUsers: 5377,
                color: 'green'
            });
        }, 2500);

        console.log('Component Mounted!'); //for test
    }

    componentDidUpdate() {
        console.log('Component Updated after API call!'); //for test
    }

    render() {
        console.log('Component re-render after API call!');
        
        return(
            <div>
                <h1 style={{color: this.state.color}}>Active Users: {this.state.activeUsers}</h1>
            </div>
        )
    }
}

export default MockAPI