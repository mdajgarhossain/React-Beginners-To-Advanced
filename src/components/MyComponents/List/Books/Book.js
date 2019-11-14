import React, {Component} from 'react';

//Twinkle Cats
class Book extends Component {

    state = {
        isEditable: false
    };

    keyPressHandler = (event) => {
        // console.log(event.key);
        if(event.key === 'Enter') {
            // console.log('You pressed Enter key!');
            this.setState({
                isEditable: false
            });
        }
    }

    editHandler = () => {
        this.setState({
            isEditable: true
        });
    }

    render() {

        let output = this.state.isEditable ? 
                    <input type="text" placeholder="Enter a book name" value={this.props.book.name} onChange={(event) => this.props.inputHandler(event.target.value, this.props.book.id)} onKeyPress={this.keyPressHandler}/> : <p> {this.props.book.name} </p>
        return(
            <div>
                <li className='list-group-item d-flex'>
                    {output}
                    <span className='ml-auto'> ${this.props.book.price} </span>
                    <div className='ml-auto'>
                        <span className='mx-4' style={{cursor: 'pointer'}} onClick={this.editHandler}>
                            <i className="fas fa-edit"></i>
                        </span>
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