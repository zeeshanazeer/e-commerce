import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Corrected axios import
import AddAllCard from '../component/AddAllCard';
import { Link } from 'react-router-dom';

function Product() {
    const API_KEY = 'https://dummyjson.com/products?limit=52&skip=130'; // Your API endpoint
    const [products, setProducts] = useState([]); // Initialize as an empty array instead of null

    // Fetch products
    const getProductDeta = async () => {
        try {
            const response = await axios.get(API_KEY); // Use axios.get for fetching
            console.log("response", response.data.products);
            setProducts(response?.data?.products); // Set products from response
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {
        getProductDeta(); // Fetch product data when component mounts
    }, []); // Empty dependency array to run only once

    console.log(products);

    return (
        <div className=' flex justify-center items-center'>
            
        <div className='w-[90%] gap-4 justify-center my-14 flex flex-wrap' >
                {products.map((item) => {
                    let discountPrice= Math.ceil(item.price-(item.discountPercentage)*(item.price/100)).toFixed(2)
                    return (
                    <>
                    <AddAllCard off={`(item.discountPercentage)%`}
                    image={item.thumbnail}
                    id={item.id}
                    price={`$${discountPrice}`}
                    del={`$${item.price.toFixed(2)}`}
                    name={item.title}
                    
                    />
                    </>
                    );
                })}
        </div>
        </div>
    );
}

export default Product;
