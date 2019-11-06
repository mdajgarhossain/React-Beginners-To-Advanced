import React, {Component} from 'react';

//Twinkle Cats
class MyIntro extends Component {
    render() {
        // console.log(this.props);
        return(
            <div>
                <h1>My name is {this.props.name}</h1>
                <h2>I am a {this.props.profession}</h2>
            </div>
        )
    }
}

export default MyIntro

// const MyIntro = (props) => {
//     // console.log(props);
    
//     return(
//         <div>
//             <h1>My name is {props.name}</h1>
//             <h2>I am a {props.profession}</h2>
//         </div>
//     )
// }

// export default MyIntro