import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent';
import axios from 'axios';
import { setProducts } from '../redux/actions/productActions';

const ProductListing = () => {
  const products = useSelector((state) => state);
  console.log(products, 'pppppppp')

  const dispatch=useDispatch()

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("error")
      })
      dispatch(setProducts(response.data));
  }

  return (
    <div>
      <ProductComponent />
    </div>
  )
}

export default ProductListing