import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import schema from "../validateSchema/Schema";


function AddProduct() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const categary=[
    { categaryName:"beauty"},
    { categaryName:"fragrances"},
    { categaryName:"furniture"},
    { categaryName:"groceries"},
    { categaryName:"home-decoration"},
    { categaryName:"kitchen-accessories"},
    { categaryName:"laptops"},
    { categaryName:"mens-shirts"},
    { categaryName:"mens-watches"},
    { categaryName:"smartphones"},
    { categaryName:"sunglasses"}

  ]
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onBlur",resolver: zodResolver(schema) }  );
  console.log("errors", errors);

  const submitHandler = async (formValues) => {
    try {
      console.log(formValues);
      const response = await axios.post("https://dummyjson.com/products/add");
      formValues;
      toast.success("Your product add has been successful");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    // <div>AddNewCard</div>
    <div className={`${darkMode ? "bg-slate-800 text-white" : ""} h-auto border-b-2 justify-between`} >
      <div className={`${darkMode ? "bg-slate-800" : "text-white"}`}>
      <section
        className={`${
          darkMode ? "bg-slate-800" : "text-white"
        } max-w-4xl p-6 mx-auto  rounded-md shadow-2xl`}
      >
        <h1
          className={`${
            darkMode ? "text-white" : "text-black"
          } text-xl font-bold  capitalize  flex justify-center`}
        >
          Add New Product
        </h1>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label
                className={`${
                  darkMode ? "text-white" : "text-black"
                } dark:text-gray-200`}
                htmlFor="productname"
              >
                Product Name
              </label>
              <input
                {...register("productName")}
                type="text"
                className={`${
                  errors.productName?.message ? "border-red-500 border-2" : ""
                } block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   focus:border-black  focus:outline-none focus:ring-myTheme`}
              />
            {errors.productName?.message?<div className="text-red-600 text-xs" > {errors.productName?.message}</div>:""} 
            </div>
            <div>
              <label
                className={` ${darkMode ? "text-white" : "text-black"} `}
                htmlFor="price"
              >
                Price
              </label>
              <input
              {...register("price")}
                type="number"
                className={`${
                  errors.price ? "border-red-500 border-2" : ""
                } block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-myTheme focus:border-black  focus:outline-none focus:ring-myTheme`}
              />
                          {errors.price?.message?<div className="text-red-600 text-xs" > {errors.price?.message}</div>:""} 

            </div>
            <div>
              <label
                className={`${darkMode ? "text-white" : "text-black"}`}
                htmlFor="stock"
              >
                Stock
              </label>
              <input
              {...register("stock")}
                type="number"
                className={`${
                  errors.stock ? "border-red-500 border-2" : ""
                } block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-myTheme focus:border-black  focus:outline-none focus:ring-myTheme`}
              />
                         {errors.stock?.message?<div className="text-red-600 text-xs" > {errors.stock?.message}</div>:""} 

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
                className={`${darkMode ? "text-white" : "text-black"}`}
                htmlFor="passwordConfirmation"
              >
                Product Categary
              </label>
              <select
                name="productCategary"
                {...register("productCategary")}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800  focus:border-black dark:focus:border-black focus:outline-none focus:ring-myTheme"
              >
                <option selected disabled   >Select Category</option>
                {
                categary.map((value,index)=>{
                  
                  
          return       <option className="text-gray-900" key={index}>{value.categaryName}</option>
                })
              }
                
             
              </select>
              {errors.productCategary?.message?<div className="text-red-500 text-xs">{errors.productCategary?.message}</div>:""}
            </div>

            <div>
              <label
                className={`${darkMode ? "text-white" : "text-black"}`}
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
                className={`${darkMode ? "text-white" : "text-black"}`}
                htmlFor="passwordConfirmation"
              >
                Discription
              </label>
              <textarea
                id="discription"
                {...register("discription")}
                type="textarea"
                className={`${errors.discription ? "border-red-500 border-2" : ""}block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md    focus:border-black dark:focus:border-black focus:outline-none focus:ring-myTheme`}
                defaultValue={""}
              />
                      { errors?.discription?.message?  <div className="text-red-600 text-xs"> {errors.discription?.message}</div>:"" }

            </div>
            <div>
              <label
                className={`${
                  darkMode ? "text-white" : "text-black"
                } block text-sm font-medium `}
              >
                Product Image
              </label>
              <div
                className={`${
                  darkMode ? "border-gray-50" : "border-black"
                } mt-1 flex justify-center px-6 pt-5 pb-6 border-2  border-dashed ${
                  errors["file-upload"] ? "border-red-500 " : ""
                }  rounded-md`}
              >
                <div className="space-y-1 text-center">
                  <svg
                    className={`${darkMode ? "text-white" : "text-black"} ${
                      errors["file-upload"] ? "text-red-400 " : ""
                    } mx-auto h-12 w-12 `}
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
                        {...register("file-upload", { required: true })}
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p
                      className={`${
                        darkMode ? "text-white" : "text-black"
                      } pl-1 `}
                    >
                      or drag and drop
                    </p>
                  </div>
                  <p
                    className={`${
                      darkMode ? "text-white" : "text-black"
                    } text-xs `}
                  >
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
              {errors["file-upload"] && (
                <span className="text-myTheme text-xs">
                  {" "}
                  This fild is Requrid
                </span>
              )}
            </div>
          </div>
          <div className="flex justify-center mt-6 gap-2">
            <button className="px-12 py-3 w-auto leading-5 text-white transition-colors duration-200 transform bg-black rounded hover:bg-myTheme focus:outline-none ">
              Submit
            </button>
            <Link
              to={"/"}
              className="px-12 py-3 w-auto leading-5 text-white transition-colors duration-200 transform bg-black rounded hover:bg-myTheme focus:outline-none "
            >
              Cancel
            </Link>
          </div>
        </form>
      </section>
    </div>
    </div>
  );
}

export default AddProduct;