import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // let population = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const country = cart[i];
    //     population = population + country.population;
    // }
    const population = cart.reduce( (sum, country) => sum + country.population, 0)
    return (
        <div>
            <h1>This is Cart: {cart.length}</h1>
            <h3>Population: {population}</h3>
        </div>
    );
};

export default Cart;