import React from 'react';

//Render with an If-Else Condition(freecodecamp)
class ConditionalComponent extends React.Component {

    state = {
        display: true
    };

    toggleDisplay = () => {
        this.setState({
            display: !this.state.display
        });
    }
    render() {
        if(this.state.display === true) {
            return(
                <div>
                    <button onClick={this.toggleDisplay}>Toggle Display</button>
                    <h1>Displayed!!!</h1>
                </div>
            );
        } else {
            return(
                <div>
                    <button onClick={this.toggleDisplay}>Toggle Display</button>
                </div>
            );
        }
    }
}

export default ConditionalComponent