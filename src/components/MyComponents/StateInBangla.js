import React, {Component} from 'react';

//Twinkle cats
class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 10,
            color: 'black'
        }
    }

    decrease = () => {
        this.setState({
            count: this.state.count - 1
        })

        // this.changeColor()
    }

    increase = () => {
        this.setState({
            count: this.state.count + 1
        })

        // this.changeColor()
    }

    changeColor = () =>{
        if(this.state.count <= 5) {
            this.setState({
                color: 'red'
            })
        } else if(this.state.count >= 15) {
            this.setState({
                color: 'green'
            })
        } else {
            this.setState({
                color: 'black'
            })
        }
    }

    render() {
        return(
            <div>
                <h1 style={{color: this.state.color}}><span onClick={this.decrease}>-</span> {this.state.count} <span onClick={this.increase}>+</span></h1>
            </div>
        )
    }
}

export default Counter