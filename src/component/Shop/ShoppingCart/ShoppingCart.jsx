import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faArrowRight, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ShoppingCart = ({cart,handleClearCart}) => {
    let qty = 0;
    let total = 0;
    let shipping = 0;
    for(const product of cart){
        qty = qty + product.quantity
        total=total+product.price * product.quantity
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total*0.1).toFixed(2));
    const grandTotal = parseFloat((total+shipping+tax).toFixed(2));
    return (
        <div className="h-80 fixed right-0 w-1/5 rounded-md  bg-primary">
            <h5 className='text-center my-5 text-2xl text-base-100'>Order Summary</h5>
            <div className='ps-6 my-12'>
                <p className='pb-4 text-base-100 text-[17px]'>Selected Items: {cart.length}</p>
                <p className='pb-4 text-base-100'>Total Price: {total}</p>
                <p className="pb-4 text-base-100">Total Shipping Charge: ${shipping}</p>
                <p className="pb-4 text-base-100">Tax: ${tax}</p>
                <h6 className="font-semibold text-base-100">Grand Total: ${grandTotal}</h6>
            </div>
            <div>
            <button onClick={handleClearCart} className='bg-red-600 block w-full rounded-md text-white p-[8px]'>Clear Cart <FontAwesomeIcon icon={faTrashAlt}/> </button>
            <button className="bg-[#FF9900] block w-full rounded-md text-white p-[8px] mt-4">Review Order <FontAwesomeIcon icon={faArrowRight}/></button>
            </div>    
        </div>
    );
};

export default ShoppingCart;