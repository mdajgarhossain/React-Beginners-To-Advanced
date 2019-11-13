import React, {Component} from 'react';
import Books from './Books';

//Twinkle cats : Working with List is React 
class BooksApp extends Component {

    state = {
        books: [
            {
                name: 'JavaScript',
                price: 20,
                id: 1
            },
            {
                name: 'ReactJS',
                price: 23,
                id: 2
            },
            {
                name: 'Redux',
                price: 15,
                id: 3
            },
            {
                name: 'NodeJS',
                price: 30,
                id: 4
            }
        ]
    };

    deleteHandler = (id) => {
        let newBooks = this.state.books.filter((book) => {
            return book.id !== id;
        });
        this.setState({
            books: newBooks
        });
    }

    render() {
        return(
            <div>
                <h4>Books List and Price</h4>
                <Books books={this.state.books} deleteHandler={this.deleteHandler}/>
            </div>
        )
    }
}

export default BooksApp