import React, {Component} from 'react';

//Add Event Listeners(freecodecamp)
class EventListener extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: ''
        };

        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleEnter() {
        this.setState({
            message: 'You pressed the enter key!'
        });
    }

    handleKeyPress(event) {
        if(event.keyCode === 13) {
            this.handleEnter();
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    }

    render() {
        return(
            <div>
                <h2>{this.state.message}</h2>
            </div>
        )
    }
}

export default EventListener