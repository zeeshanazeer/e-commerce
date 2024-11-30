import React, { useState } from 'react';
import useSWR from 'swr';
import axios from 'axios';
import { useParams } from 'react-router-dom';
// import useSWR from 'swr'
function ProductDitail() {
  let params= useParams()

  const { data, error, isLoading } = useSWR(`https://dummyjson.com/products/${params.id}`, axios)

let product=data?.data
console.log(product);


const  [selectImage,setSelectImage]=  useState(product?.images[0])
  return (
    <div>
      {params.id}
      
    </div>
  )
}

export default ProductDitail
