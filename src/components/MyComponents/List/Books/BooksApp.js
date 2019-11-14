import React, {Component} from 'react';
import Books from './Books';

//Twinkle cats : Working with List is React 
class BooksApp extends Component {

    constructor(props) {
        super(props);

        this.state = {
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

        console.log('BooksApp Constructor');
    }

    componentDidMount() {
        console.log('BooksApp componentDidMount');
    
    }

    componentDidUpdate() {
        console.log('BooksApp componentDidUpdate');
    }
    

    inputHandler = (name, id) => {
        let newBooks = this.state.books.map((book) => {
            if(id === book.id) {
                return {
                    ...book,
                    name
                }
            }

            return book;
        });

        this.setState({
            books: newBooks
        });
    }

    deleteHandler = (id) => {
        let newBooks = this.state.books.filter((book) => {
            return book.id !== id;
        });
        this.setState({
            books: newBooks
        });
    }

    render() {
        console.log('BooksApp Render');

        return(
            <div>
                <h4>Books List and Price</h4>
                <Books books={this.state.books} inputHandler={this.inputHandler} deleteHandler={this.deleteHandler}/>
            </div>
        )
    }
}

export default BooksApp

/*Summary:
constructor()
render()
Call all child lifecycle methods
componentDidMount()
or
componentWillUnmount()
or
componentDidUpdate()
*/