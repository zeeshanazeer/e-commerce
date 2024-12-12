import axios from "axios";
import React, { useEffect, useState } from "react";

function useProducts(skipLimit) {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, SetError] = useState(null);
  const API_KEY = `https://dummyjson.com/products?${skipLimit}`;

  let getProductData = async (event) => {
    try {
      setIsLoading(true);
      SetError(null);
      let response = await axios(API_KEY);
      let data = response.data.products;
      // console.log(data);
      setIsLoading(false);
      return setProducts(data);
    } catch (error) {
      setIsLoading(false);
      SetError(error.response.statusText);
      setProducts(null);
      console.log(error.response.statusText);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getProductData();
  }, []);
  return {
    products,
    error,
    isLoading,
  };
}

export default useProducts;