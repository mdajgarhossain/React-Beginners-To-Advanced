import React, {Component} from 'react';

//Use State to Toggle an Element(freecodecamp)
class ToggleElementInComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visibility: false
        };

        this.toggleVisibility = this.toggleVisibility.bind(this);
    }

    toggleVisibility() {
        if(this.state.visibility === true) {
            this.setState((state) => ({
                visibility: false
            }))
        } else {
            this.setState((state) => ({
                visibility: true
            }))
        }
    }

    render() {
        if(this.state.visibility) {
            return(
                <div>
                    <button onClick={this.toggleVisibility}>Click Here</button>
                    <h1>Now you see me!</h1>
                </div>
            )
        } else {
            return(
                <div>
                    <button onClick={this.toggleVisibility}>Click Here</button>
                </div>
            )
        }
    }
}

export default ToggleElementInComponent