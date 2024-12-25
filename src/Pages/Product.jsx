import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Corrected axios import
import AddAllCard from '../component/AddAllCard';
import { Link } from 'react-router-dom';

function Product() {
    const API_KEY = 'https://dummyjson.com/products?limit=120'; // Your API endpoint
    const [product, setProducts] = useState([]); // Initialize as an empty array instead of null

    // Fetch products
    const getProductDeta = async () => {
        try {
            const response = await axios.get(API_KEY); // Use axios.get for fetching
            console.log("response", response.data?.products);
            setProducts(response?.data?.products); // Set products from response
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {
        getProductDeta(); // Fetch product data when component mounts
    }, []); // Empty dependency array to run only once

    const [searchValue, setSearchValue] = useState("");
    
    // Filter Function
    const searchProducts = () => {
        let result = product?.filter((item) => {
            return item.title.toLowerCase().includes(searchValue.toLowerCase());
        });
        return result;
    };

    let searchReasult = searchProducts();

    return (
        <>
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="relative isolate overflow-hidden bg-white px-6 py-20 text-center sm:px-16 sm:shadow-sm">
                    <p className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Search Products
                    </p>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <label
                            className="mx-auto mt-8 relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded gap-2 shadow-2xl focus-within:border-gray-300"
                            htmlFor="search-bar"
                        >
                            <input
                                id="search-bar"
                                placeholder="Search your Products"
                                name="q"
                                onChange={(event) => {
                                    setSearchValue(event.target.value);
                                }}
                                className="px-6 py-2 w-full rounded flex-1 outline-none bg-white"
                                required=""
                            />
                        </label>
                    </form>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="w-[90%] gap-4 justify-center my-14 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
                    {searchReasult?.map((item, i) => {
                        let discountPrice = Math.ceil(item.price - (item.discountPercentage) * (item.price / 100)).toFixed(2);
                        return (
                            <div key={i} className="flex justify-center">
                                <AddAllCard
                                    off={`${item.discountPercentage.toFixed(0)}%`}
                                    image={item.thumbnail}
                                    id={item.id}
                                    price={`$${discountPrice}`}
                                    del={`$${item.price.toFixed(0)}`}
                                    titlename={item.title}
                                    value={item.rating}
                                    // Add classes for responsive design
                                    imageClass="w-full h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64" // Responsive image size
                                    textClass="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl" // Responsive text size
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Product;
