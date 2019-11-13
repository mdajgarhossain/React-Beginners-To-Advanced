import React, {Component} from 'react';

//Twinkle Cats
class Book extends Component {

    render() {
        return(
            <div>
                <li className='list-group-item d-flex'>
                    <p> {this.props.book.name} </p>
                    <span className='ml-auto'> ${this.props.book.price} </span>
                    <div className='ml-auto'>
                        <span style={{cursor: 'pointer'}} onClick={() => this.props.deleteHandler(this.props.book.id)}>
                            <i className="fas fa-trash"></i>
                        </span>
                    </div>
                </li>
            </div>
        )
    }
}

export default Book