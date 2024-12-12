import React from 'react'
import {Link} from "react-router-dom"

const rout = [{name: "Home", myPath: "/"}]

function Add(props){
    return(
        <>
            <div>
                <span>
                    {rout.map((item)=>(
                        <button>
                            <Link to={item.myPath}>{item.name}</Link>
                        </button>
                    ))}
                </span>
                <div>

                </div>
            </div>
        </>
    )
}
// import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
// import { ChevronDownIcon } from '@heroicons/react/16/solid'
// import { Link } from 'react-router-dom'

// export default function AddProduct() {
//   return (
//     <form>
//       <div className="space-y-12 mx-16">
//         <div className="border-b border-gray-900/10 pb-12">
//           <h2 className="text-base/7 font-semibold text-gray-900">Profile</h2>
//           <p className="mt-1 text-sm/6 text-gray-600">
//             This information will be displayed publicly so be careful what you share.
//           </p>

//           <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//             <div className="sm:col-span-4">
//               <label htmlFor="product_name" className="block text-sm/6 font-medium text-gray-900">
//                 Product_Name
//               </label>
//               <div className="mt-2">
//                 <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
//                   {/* <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6">workcation.com/</div> */}
//                   <input
//                     id="product_name"
//                     name="product_name"
//                     type="text"
//                     required
//                     placeholder="Product_Name"
//                     className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="col-span-full">
//               <label htmlFor="discription" className="block text-sm/6 font-medium text-gray-900">
//                 Discription
//               </label>
//               <div className="mt-2">
//                 <textarea
//                   id="discription"
//                   name="discription"
//                   required
//                   rows={3}
//                   className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
//                   defaultValue={''}
//                 />
//               </div>
//               <p className="mt-3 text-sm/6 text-gray-600">Write a few sentences discription yourself.</p>
//             </div>

//             <div className="col-span-full">
//               <label htmlFor="product-photo" className="block text-sm/6 font-medium text-gray-900">
//                 Product_Photo
//               </label>
//               <div className="mt-2 flex items-center gap-x-3">
//                 <UserCircleIcon aria-hidden="true" className="size-12 text-gray-300" />
//                 <button
//                   type="button"
//                   className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
//                 >
//                   Change
//                 </button>
//               </div>
//             </div>

//             <div className="col-span-full">
//               <label htmlFor="cover-photo" className="block text-sm/6 font-medium text-gray-900">
//                 Product photo
//               </label>
//               <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
//                 <div className="text-center">
//                   <PhotoIcon aria-hidden="true" className="mx-auto size-12 text-gray-300" />
//                   <div className="mt-4 flex text-sm/6 text-gray-600">
//                     <label
//                       htmlFor="file-upload"
//                       className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
//                     >
//                       <span>Upload a file</span>
//                       <input id="file-upload" name="file-upload" type="file" className="sr-only" />
//                     </label>
//                     <p className="pl-1">or drag and drop</p>
//                   </div>
//                   <p className="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="border-b border-gray-900/10 pb-12">
//           <h2 className="text-base/7 font-semibold text-gray-900">Personal Information</h2>
//           <p className="mt-1 text-sm/6 text-gray-600">Use a permanent address where you can receive mail.</p>

//           <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//             {/* <div className="sm:col-span-3">
//               <label htmlFor="category" className="block text-sm/6 font-medium text-gray-900">
//                 Category
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="category"
//                   name="category"
//                   type="text"
//                   autoComplete="given-name"
//                   className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
//                 />
//               </div>
//             </div> */}

//             <div className="sm:col-span-3">
//               <label htmlFor="price" className="block text-sm/6 font-medium text-gray-900">
//                 Price
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="price"
//                   name="price"
//                   type="number"
//                   autoComplete="family-name"
//                   className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-4">
//               <label htmlFor="stock" className="block text-sm/6 font-medium text-gray-900">
//                 Quantity
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="stock"
//                   name="stock"
//                   type="number"
//                   // autoComplete="email"
//                   className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-3">
//               <label htmlFor="category" className="block text-sm/6 font-medium text-gray-900">
//               Category
//               </label>
//               <div className="mt-2 grid grid-cols-1">
//                 <select
//                   id="category"
//                   name="category"
//                   autoComplete="category"
//                   className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
//                 >
//                   <option>Electronics</option>
//                   <option>Sports</option>
//                   <option>Goleries</option>
//                   <option>Cosmetics</option>
//                   <option>Clothings</option>
//                 </select>
//                 <ChevronDownIcon
//                   aria-hidden="true"
//                   className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         </div>

//       <div className="mt-6 flex items-center justify-end gap-x-6">
//         <Link to='/' type="button" className="text-sm/6 font-semibold text-gray-900">
//           Cancel
//         </Link>
//         <button
//           type="submit"
//           className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//         >
//           Save
//         </button>
//       </div>
//     </form>
//   )
// }

function CardAdd() {
  return (
    <>
      <div>
      <Add/>
      </div>
    </>
  )
}

export default CardAdd
