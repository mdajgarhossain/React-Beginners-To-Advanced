import React, {Component} from 'react';

//Pass State as Props to Child Components(freecodecamp)
class MyApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'React Developer'
        };
    }

    render() {
        return(
            <div>
                <Navbar name={this.state.name}/>
            </div>
        )
    }
}

class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h4>Pass State as Props to Child Components</h4>
                <h3>I am a {this.props.name}!</h3>
            </div>
        )
    }
}

export default MyApp