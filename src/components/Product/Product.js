import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    console.log(props)
    const {img, name,price,seller,stock} =props.product;
    return (
        <div className='product'>
           <div>
            <img src={img} alt=""/>
           </div>

           <div className="product-details">

           <h4 >{name}</h4>
           <h2>price: ${price}</h2>
           <h3>Seller by: {seller}</h3>
           <h5>Stock available: {stock}</h5>
           <button className="addButton" onClick={()=>props.handleAddProduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
           </div>

           
        </div>
    );
};

export default Product;