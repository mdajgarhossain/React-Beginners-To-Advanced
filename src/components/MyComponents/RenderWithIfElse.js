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
            return(
                <div>
                    <button onClick={this.toggleDisplay}>Toggle Display</button>
                    {/* Use && for a More Concise Conditional */}
                    {this.state.display && <h1>Displayed!!!</h1>} 
                </div>
            );
    }
}

export default ConditionalComponent