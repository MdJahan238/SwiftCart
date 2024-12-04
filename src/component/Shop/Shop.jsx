import React, { useState } from 'react';
import Products from './Product/Products';
import ShoppingCart from './ShoppingCart/ShoppingCart';

const Shop = () => {
    const [cart,setCart] = useState([])
    const handleAddToCart = (selectedProduct)=>{
        let newCart =[];
        const exist = cart.find((product)=>product.id===selectedProduct.id);
        if(!exist)
        {
            selectedProduct.quantity = 1;
            newCart = [...cart,selectedProduct]
        } else {
            const rest = cart.filter(product => product.id !== selectedProduct.id )
            exist.quantity = exist.quantity + 1;
            newCart = [...rest,exist];
        }
        setCart(newCart);
    } ;

    //cart Clear Function

    const handleClearCart = () =>{
        console.log('handleClearCart');
        setCart("");       
    };
    return (
        <div className='flex mt-20'> 
            <div className='bg-white w-4/5'>
                <Products handleAddToCart={handleAddToCart}></Products>
            </div>
            <div className='min-h-screen fixed right-0 w-1/5 rounded-md  bg-primary'>
                <ShoppingCart cart={cart} handleAddToCart={handleClearCart}></ShoppingCart>
            </div>
        </div>
    );
};

export default Shop;