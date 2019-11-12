import React, {Component} from 'react';
import '../App.css';

//Twinkle Cats: Styles With CSS
/*1st: import css from .css file 
2nd: inline styles with JS object*/

class StyledComponent extends Component {
    

    render() {
        let styleObj =  {
            padding: '15px',
            textAlign: 'center', 
            color: 'skyblue'
        };
        return(
            <div className="StyledComponent">
                <h1>Hello Developers!</h1>
                <h3 style={{padding: '20px', textAlign: 'center', color: 'skyblue'}}>You know How to React!!!</h3>
                <h4 style={styleObj}>Let's start</h4>
            </div>
        )
    }
}

export default StyledComponent