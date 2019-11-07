import React from 'react';
import PropTypes from 'prop-types'; //must be imported for PropTypes

//Override Default Props(freecodecamp)
const Items = ({quantity}) => {
    return(
        <div>
            <h1>Current Quantity of Items in Cart: {quantity}</h1>
        </div>
    )
}

//Use PropTypes to Define the Props You Expect
Items.propTypes = {quantity: PropTypes.number.isRequired}

Items.defaultProps = {quantity: 10}

const ShoppingCart = () => {
    return <Items quantity={75}/>
}

export default ShoppingCart