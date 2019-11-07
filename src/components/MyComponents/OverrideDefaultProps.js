import React from 'react';

//Override Default Props(freecodecamp)
const Items = ({quantity}) => {
    return(
        <div>
            <h1>Current Quantity of Items in Cart: {quantity}</h1>
        </div>
    )
}

Items.defaultProps = {quantity: 10}

const ShoppingCart = () => {
    return <Items quantity={75}/>
}

export default ShoppingCart