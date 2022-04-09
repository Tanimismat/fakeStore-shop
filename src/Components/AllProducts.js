import React, { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct';

const AllProducts = ({ setCartCount }) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    console.log(products)

    return (
        <div>
            <h2>all products </h2>
            <div className="row container">
                {
                    products.map(pd => <SingleProduct
                        key={pd.id}
                        product={pd}
                        setCartCount={setCartCount}
                    ></SingleProduct>)
                }
            </div>

        </div>
    );
};

export default AllProducts;