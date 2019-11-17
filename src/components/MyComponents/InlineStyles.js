import React , {Component} from 'react';

//Introducing Inline Styles(freecodecamp)
class Colorful extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let myStyle = {
            color: 'yellow'
        }
        return(
            <div style={{background: '#751b10', fontSize: 20}}>
                <h1 style={myStyle}>My Name is Jewell</h1>
                <h3 style={{color: '#149655'}}>I am a Software Developer</h3>
            </div>
        )
    }
}
export default Colorful