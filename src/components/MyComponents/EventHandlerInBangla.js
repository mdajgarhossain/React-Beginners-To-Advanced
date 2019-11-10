import React from 'react';

//Twinkle cats
class MyEvent extends React.Component {

    state = {
        name: ''
    }

    clickHandler = (event) => {
        alert('Hi, This is an alert for you!!!')
        console.log(event);
        console.log(event.target);
    }

    inputHandler = (event) => {
        // console.log(event.target.value);
        this.setState({
            name: event.target.value
        })
    }

    render() {
        return(
            <div>
                <div className="container my-3">
                    <input onChange={this.inputHandler} type="text" placeholder="Enter Your Name" />
                    <button className="btn btn-primary" onClick={() => alert('Hi, This is an alert for you!!!')}>Just One Click</button>
                    {this.state.name ? <h3>Hello Mr. {this.state.name}</h3> : ''}
                </div>
            </div>
        )
    }
}

export default MyEvent