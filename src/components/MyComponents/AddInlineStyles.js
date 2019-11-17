import React, {Component} from 'react';

//Add Inline Styles in React(freecodecamp)
const styles = {
    color: 'purple',
    fontSize: 24,
    border: '2px solid purple'
}
class Colored extends Component {
    render() {
        return(
            <div style={styles}>
                <h1>Style Me!!!</h1>
            </div>
        )
    }
}

export default Colored