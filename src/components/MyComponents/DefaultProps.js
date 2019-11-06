import React from 'react';

//Use Default Props(freecodecamp)
const ShoppingCart = (props) => {
    return(
        <div>
            <h2>Shopping Cart</h2>
            <p>Selected Items: {props.items}</p>
            <p>Available Items: {props.forSale.join(', ')}</p>
        </div>
    )
}

ShoppingCart.defaultProps = {items: 0, forSale: ['Jeans', 'T-shirt', 'Shoes']}

export default ShoppingCart