import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProducts, removeSelectedProducts } from '../redux/actions/productActions';

const ProductDetail = () => {
  const product = useSelector((state) => state.product)
  const { category, description, title, image, price, rating } = product

  console.log(product, 'product')

  const { productId } = useParams()
  const dispatch = useDispatch();

  const fetchProductDetail = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
      .catch((error) => {
        console.log('error')
      })
    console.log(response, 'rep')
    dispatch(selectedProducts(response.data));
  }

  useEffect(() => {
    fetchProductDetail()
    return () => {
      dispatch(removeSelectedProducts())
    }

  }, [productId])
  return (
    <>
      {product && Object.keys(product).length > 0 ?
        
        <div className="container">
          <div className='card'>
            <div className="row">
              <div className="col-md-6">
                <img src={image} alt="Product" className="img-fluid" />
              </div>
              <div className="col-md-6">
                <h1 className='my-3'>{title}</h1>
                <h2 className='my-3'>{category}</h2>
                <p className='my-3'>{description}.</p>
                <h2 className='my-3'>Price: ${price}</h2>
                <button className="btn btn-primary my-3">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
        :
        <h1>Loading......</h1>
      }
    </>
  )
}

export default ProductDetail