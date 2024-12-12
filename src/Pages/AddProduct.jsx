import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
// const darkMode = useSelector((state) => state.darkMode.darkMode);

function AddProduct() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  const { register, handleSubmit, watch, formState: { errors } } = useForm(
    {mode:"onBlur"}
  );
  const submitHandler= async(formValues)=>{
    try {
    //   event.preventDefault()
    // const formValues={}
    // const formdata=new FormData(event.target)
    // for( const pairs of formdata.entries()){
    //   formValues[pairs[0]]=pairs[1];
    // }
    console.log(formValues);
    const response= await axios.post('https://dummyjson.com/products/add')
    formValues
    toast.success("Your product add has been successful")
    
    } catch (error) {
      toast.error(error.message)

      // console.log("error :",error.message||"Unknown Error");
      
    }
  }
  return (
    // <div>AddNewCard</div>
    <div className={`${darkMode?"pageDark":"bg-white"}`}>
  

  <section className={`${darkMode?"pageDark":"bg-white"} max-w-4xl p-6 mx-auto  rounded-md shadow-2xl my-7 mt-20`}>
    <h1 className={`${darkMode?"text-white":"text-black"} text-xl font-bold  capitalize `}>
      Add New Product
    </h1>
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
        <div>
          <label className={`${darkMode?"text-white":"text-black"} dark:text-gray-200`} htmlFor="productname">
            Product Name
          </label>
          <input
          {...register("product-name",{required:true})}
            type="text"
            className={`${errors["product-name"]?"border-red-500 border-2":""} block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   focus:border-black  focus:outline-none focus:ring-myTheme`}
          />
                  { errors["product-name"]&&<span className='text-myTheme text-xs'> This fild is Requrid</span>}

        </div>
        <div>
          <label className={` ${darkMode?"text-white":"text-black"} `} htmlFor="price">
            Price
          </label>
          <input
          {...register("price",{required:true},{min:50})}
            type="number"
            className={`${errors.price?"border-red-500 border-2":""} block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-myTheme focus:border-black  focus:outline-none focus:ring-myTheme`}
          />
                            {errors.price&&<span className='text-myTheme text-xs'> This fild is Requrid</span>}

        </div>
        <div>
          <label
            className={`${darkMode?"text-white":"text-black"}`}
            htmlFor="stock"
          >
            Stock
          </label>
          <input
          {...register("stock",{required:true})}
            type="number"
            className={`${errors.stock?"border-red-500 border-2":""} block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-myTheme focus:border-black  focus:outline-none focus:ring-myTheme`}
          />
                            {errors.stock&&<span className='text-myTheme text-xs'> This fild is Requrid</span>}

        </div>
        {/* <div>
          <label
            className="text-black dark:text-gray-200"
            htmlFor="passwordConfirmation"
          >
            Color
          </label>
          <input
            id="color"
            type="color"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-myTheme focus:border-black  focus:outline-none focus:ring-myTheme"
          />
        </div> */}
        <div>
          <label
            className={`${darkMode?"text-white":"text-black"}`}
            htmlFor="passwordConfirmation"
          >
            Product Categary
          </label>
          <select name='productCategary'{...register("productCategary")} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800  focus:border-black dark:focus:border-black focus:outline-none focus:ring-myTheme">
            <option>Surabaya</option>
            <option>Jakarta</option>
            <option>Tangerang</option>
            <option>Bandung</option>
          </select>
        </div>
       
        <div>
          <label
            className={`${darkMode?"text-white":"text-black"}`}
            htmlFor="date"
          >
            Date
          </label>
          <input
            id="date"
            {...register("date")}
            type="date"
            className={` block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-myTheme focus:border-black dark:focus:border-black focus:outline-none focus:ring-myTheme`}
          />
        </div>
        <div>
          <label
            className={`${darkMode?"text-white":"text-black"}`}
            htmlFor="passwordConfirmation"
          >
             Discription
          </label>
          <textarea
            id="discription"
            {...register("discription",{min:250,max:1000})}
            type="textarea"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md    focus:border-black dark:focus:border-black focus:outline-none focus:ring-myTheme"
            defaultValue={""}
          />
        </div>
        <div>
          <label className={`${darkMode?"text-white":"text-black"} block text-sm font-medium `}>Product Image</label>
          <div className={`${darkMode?"border-gray-50":"border-black"} mt-1 flex justify-center px-6 pt-5 pb-6 border-2  border-dashed ${errors["file-upload"]?"border-red-500 ":""}  rounded-md`}>
            <div className="space-y-1 text-center">
              <svg
                className={`${darkMode?"text-white":"text-black"} ${errors["file-upload"]?"text-red-400 ":""} mx-auto h-12 w-12 `}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer  rounded-md font-medium text-myTheme  focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                  <span className="">Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    {...register("file-upload",{required:true})}
                    type="file"
                    className="sr-only"
                  />
                </label>
                <p className={`${darkMode?"text-white":"text-black"} pl-1 `}>or drag and drop</p>
              </div>
              <p className={`${darkMode?"text-white":"text-black"} text-xs `}>PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
          {errors["file-upload"]&&<span className='text-myTheme text-xs'> This fild is Requrid</span>}

        </div>
      </div>
      <div className="flex justify-center mt-6 gap-2">
        <button className="px-12 py-3 w-auto leading-5 text-white transition-colors duration-200 transform bg-black rounded hover:bg-myTheme focus:outline-none ">
          Submit
        </button>
        <Link to={"/"} className="px-12 py-3 w-auto leading-5 text-white transition-colors duration-200 transform bg-black rounded hover:bg-myTheme focus:outline-none ">
          Cancel
        </Link>
      </div>
    </form>
  </section>
  {/* <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 mt-20">
    <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-black">
      Account settings
    </h2>
    <form>
      <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
        <div>
          <label
            className="text-gray-700 dark:text-gray-200"
            htmlFor="username"
          >
            Username
          </label>
          <input
            id="username"
            type="text"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>
        <div>
          <label
            className="text-gray-700 dark:text-gray-200"
            htmlFor="emailAddress"
          >
            Email Address
          </label>
          <input
            id="emailAddress"
            type="email"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>
        <div>
          <label
            className="text-gray-700 dark:text-gray-200"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>
        <div>
          <label
            className="text-gray-700 dark:text-gray-200"
            htmlFor="passwordConfirmation"
          >
            Password Confirmation
          </label>
          <input
            id="passwordConfirmation"
            type="password"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <button className="px-6 py-2 leading-5 text-black transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
          Save
        </button>
      </div>
    </form>
  </section> */}

 {/* <div>
          <label
            className="text-black dark:text-gray-200"
            htmlFor="productCategary"
          >
            Product Categary
          </label>
          <input
            id="productCategary"
            name="productCategary"
            type="productCategary"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-myTheme focus:border-black  focus:outline-none focus:ring-myTheme"
          />
        </div> */}
         {/* <div>
          <label
            className="text-black dark:text-gray-200"
            htmlFor="passwordConfirmation"
          >
            Range
          </label>
          <input
            id="range"
            type="range"
            className="block w-full py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div> */}


    
    
    </div>
  )
}

export default AddProduct