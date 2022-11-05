import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { delCart } from '../redux/action';
const Cart = () => {
    const dispatch = useDispatch();
    const deleteCart = (products) => {
        dispatch(delCart(products))
    }
    const state = useSelector((state) => state.handleCart)
    console.log(state)
    return (
        <div>

            {
                state.map((item) => (
                    <div className='d-flex flex-column align-items-center justify-content-center '>
                        <div className="col-md-4">
                            <img src={item.image} alt={item.title} height="200px" width="200px" />

                        </div>
                        <div className="col-md-4">
                            <h5 className="text-uppercase text-black-50">
                                {
                                    item.category
                                }
                            </h5>
                            <h1 className="display-10">
                                {item.title}
                            </h1>
                            <h3 className="display-10 fw-bold-my-8">
                                ${item.price}
                            </h3>
                        </div>


                    </div>
                ))
            }
            <div>
                <button onClick={(products) => deleteCart(products)}>Remove</button>
            </div>
        </div>
    )
}
export default Cart;