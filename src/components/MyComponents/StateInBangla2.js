import React, {Component} from 'react';
import MyIntro from './CompoWithProps';

//Twinkle cats
class Developers extends Component {

    state = {
        persons: [
            {name: 'Jewell', place: 'Frontend Developer'},
            {name: 'Ajgar', place: 'Backend Developer'},
            {name: 'Hossain', place: 'Fullstack Developer'}
        ],
        color: 'black'
    }

    clickHandler = () => {
        this.setState({
            color: 'green'
        })
    }

    render() {
        return(
            <div>
                <h4>Same component MyIntro here is in another state!</h4>
                <button onClick={this.clickHandler}><strong>click to be green</strong></button>
                {/*1st approach: bad practice*/}
                {/* <MyIntro name={this.state.persons[0].name} profession={this.state.persons[0].place}/>
                <MyIntro name={this.state.persons[1].name} profession={this.state.persons[1].place}/>
                <MyIntro name={this.state.persons[2].name} profession={this.state.persons[2].place}/> */}

                <span style={{color: this.state.color}}>
                {this.state.persons.map((person, index) => {
                    return <MyIntro key={index} name={person.name} profession={person.place} />
                })}
                </span>

            </div>
        )
    }
}

export default Developers