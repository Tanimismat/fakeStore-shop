import React from 'react';
import ReactModal from './ReactModal';

const SingleProduct = ({ product, setCartCount }) => {
    // console.log(product)
    return (
        <div data-aos="flip-left" className='col-md-4'>
            <div className="card p-3 ">
                <img className='w-25 m-auto' src={product.image} alt="" />
                <h5>{product.title.slice(0, 10)}</h5>
                <div className="d-flex justify-content-around">
                    <button className='btn btn-success' onClick={setCartCount}>Add to cart</button>
                    <button className='btn btn-danger'>Delete</button>
                    {/* <button className='btn btn-info'>Details</button> */}
                    <ReactModal product={product}></ReactModal>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;