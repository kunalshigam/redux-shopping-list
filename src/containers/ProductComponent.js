
import React from 'react'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);

    console.log(products, 'productsssssssss')

    const TruncateString = (value, maxLength) => {

        if (value.length > maxLength) {
            return value.slice(0, maxLength) + "..."
        } else {
            return value
        }
    }

    // useEffect(() => {
    //     renderList()
    // }, [])

    // const renderList = () => {
    //     products?.map((item, index) => (
    //         <div className="card" style={{ width: '18rem' }} key={index}>
    //             <img src={item.image} className="card-img-top" alt={item.id} />
    //             <div className="card-body">
    //                 <h2 className="card-title">{item.title}</h2>
    //                 <h5 className="card-title">{item.category}</h5>
    //                 <p className="card-text">{item.description}</p>
    //                 <h3 className='card-text'>Price:- {item.price}</h3>
    //                 <a href="#" className="btn btn-primary">Add to cart</a>
    //             </div>
    //         </div>
    //     ))
    // }
    return (
        <div className="container mt-4">
            <div className="row align-items-center justify-content-evenly">
                {
                    products?.map((item, index) => (

                        <div className="card my-3 mx-2" key={index} style={{ height: "600px", width: "400px" }}>
                            <Link to={`/product/${item.id}`}>
                                <div className="card-img-top my-3 mx-5" style={{ height: '300px', width: '200px' }}>
                                    <img src={item.image} alt={item.id} className='img-fluid' />
                                </div>
                            </Link>
                            <div className="card-body">
                                <h2 className="card-title">{TruncateString(item.title, 50)}</h2>
                                <h5>{item.category}</h5>
                                <h3 className='card-text'>Price:- $ {item.price}</h3>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div >
    )
}

export default ProductComponent