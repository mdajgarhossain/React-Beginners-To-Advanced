import React, {Component} from 'react';
import Book from './Book';

//Twinkle cats
class Books extends Component {

    render() {
        return(
            <div>
                {this.props.books.map(book => {
                    return(
                        <Book book={book} inputHandler={this.props.inputHandler} deleteHandler={this.props.deleteHandler}/>
                    )
                })}
            </div>
        )
    }
}

export default Books