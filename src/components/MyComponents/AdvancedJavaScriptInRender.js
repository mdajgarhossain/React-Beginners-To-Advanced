import React, {Component} from 'react';

//Use Advanced JavaScript in React Render Method(freecodecamp)
const inputStyles = {
    width: 235,
    margin: 5
};

class MagicEightBall extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: '',
            randomIndex: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.ask = this.ask.bind(this);
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }

    ask() {
        if(this.state.input) {
            this.setState({
                randomIndex: Math.floor(Math.random() * 20),
                input: ''
            });
        }
    }

    render() {
        const possibleAnswers = [
            'It is certain',
            'It is decidedly so',
            'Without a doubt',
            'Yes, definitely',
            'You may rely on it',
            'As I see it, yes',
            'Outlook good',
            'Yes',
            'Signs point to yes',
            'Reply hazy try again',
            'Ask again later',
            'Better not tell you now',
            'Cannot predict now',
            'Concentrate and ask again',
            'Don\'t count on it',
            'My reply is no',
            'My sources say no',
            'Most likely',
            'Outlook not so good',
            'Very doubtful'
        ];

        const answer = possibleAnswers[this.state.randomIndex];
        return(
            <div>
                <input type='text' value={this.state.input} onChange={this.handleChange} style={inputStyles}/>
                <br />
                <button onClick={this.ask}>Ask the Magic Eight Ball!</button> <br />
                <h3>Answer:</h3>
                <p>{answer}</p>
            </div>
        )
    }
}

export default MagicEightBall