import React from 'react';

const Cart = (props) => {
    const cart=props.cart;
    
    let total=0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total=Math.round(total+product.price);
        
    }

    let shipping=0;
    if(total>0){
        shipping=50
    }
    const tax= Math.round(total*0.1);
    const TotalPrice=Math.round(total+shipping+tax);
    return (
        <div>
            <h2>Order Summery</h2>
            <h3>Items Order:{cart.length} </h3>
            <h1>Product price: ${total}</h1>
            <p><small>shipping cost:${shipping}</small></p>
            <p><small>Tax: ${tax}</small></p>
            <p>Total Price: {TotalPrice}</p>
            
        </div>
    );
};

export default Cart;