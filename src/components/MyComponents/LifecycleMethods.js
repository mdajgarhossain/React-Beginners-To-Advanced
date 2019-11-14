import React, {Component} from 'react';

//Twinkle cats
class LifecycleComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            color: 'black',
            mountColor: 'black',
            updateColor: 'black',
            umMountColor: 'black'

        };

        console.log('APP Constructor');
    }

    colorHandler = () => {
        this.setState({
            color: '#000099',
            mountColor: '#cc9900',
            updateColor: '#009900',
            umMountColor: '#ff0000'
        });
    }

    componentDidMount() {
        console.log('APP componentDidMount');
    
    }

    componentDidUpdate() {
        console.log('APP componentDidUpdate');
    }

    render() {
        console.log('APP Render');
        
        return(
            <div>
                <h2 onClick={this.colorHandler} style={{color: this.state.color, cursor: 'pointer', textAlign: 'center'}}>Lifecycle App(click to Beautify)</h2>
                <h3>React lifecycle methods:</h3>
                <Mounting mountColor={this.state.mountColor}/>
                <Updating updateColor={this.state.updateColor}/>
                <UnMounting umMountColor={this.state.umMountColor}/>
            </div>
        )
    }
}

class Mounting extends Component {

    render() {
        return(
            <div>
                <h4 style={{color: this.props.mountColor}}>Mounting – Birth of your component</h4>
                <ul>
                    <li>constructor()</li>
                    <li>render()</li>
                    <li>componentDidMount()</li>
                </ul>
            </div>
        )
    }
}

class Updating extends Component {

    render() {
        return(
            <div>
                <h4 style={{color: this.props.updateColor}}>Update – Growth of your component</h4>
                <ul>
                    <li>render()</li>
                    <li>componentDidUpdate()</li>
                </ul>
            </div>
        )
    }
}

class UnMounting extends Component {

    render() {
        return(
            <div>
                <h4 style={{color: this.props.umMountColor}}>Unmount – Death of your component</h4>
                <ul>
                    <li>componentWillUnmount()</li>
                </ul>
            </div>
        )
    }
}

export default LifecycleComponent