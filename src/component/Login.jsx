// import React from 'react'

// function Register() {
//   return (
//     <div>
//       <section className="text-gray-600 body-font relative">
//   <div className="absolute inset-0 bg-gray-300">
//     <iframe
//       width="100%"
//       height="100%"
//       frameBorder={0}
//       marginHeight={0}
//       marginWidth={0}
//       title="map"
//       scrolling="no"
//       src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
//       style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
//     />
//   </div>
//   <div className="container px-5 py-24 mx-auto flex">
//     <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
//       <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
//         Exclusive
//       </h2>
//       <p className="leading-relaxed mb-5 text-gray-600">
//         Register Your Acount
//       </p>
//       <div className="relative mb-4">
//         <label htmlFor="email" className="leading-7 text-sm text-gray-600">
//           Full Name
//         </label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           placeholder='Full Name'
//           className="w-full bg-white rounded border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//         />
//       </div>
//       <div className="relative mb-4">
//         <label htmlFor="email" className="leading-7 text-sm text-gray-600">
//           Email
//         </label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           placeholder='Email'
//           className="w-full bg-white rounded border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//         />
//       </div>
//       <div className="relative mb-4">
//         <label htmlFor="email" className="leading-7 text-sm text-gray-600">
//           Password
//         </label>
//         <input
//           type="password"
//           id="pass"
//           name="pass"
//           placeholder='Password'
//           className="w-full bg-white rounded border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//         />
//       </div>
//       <div className="relative mb-4">
//         <label htmlFor="message" className="leading-7 text-sm text-gray-600">
//           Address
//         </label>
//         <textarea
//           id="message"
//           name="message"
//           className="w-full bg-white rounded border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
//           defaultValue={""}
//         />
//       </div>
//       <button className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg">
//         Register
//       </button>
//     </div>
//   </div>
// </section>
//     </div>
//   )
// }

// export default Register;

import React from "react";
import { Link } from "react-router-dom";

function Register() {
  const dataInputs=(event)=>{
    event.preventDefault()
 const formData =   new FormData(event.target)
 const password=formData.get('password')
 const email=formData.get('email')
console.log("Password :",password,"Email:",email);

  }
  return (
    

    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="flex items-center mb-6 text-3xl font-semibold text-black  dark:text-white">
          {/* <img
        className="w-8 h-8 mr-2"
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
        alt="logo"
      /> */}
        </div>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="flex justify-center text-xl font-bold leading-tight rounded tracking-tight text-black md:text-2xl dark:text-white">
              Login in to your Account
            </h1>
            <form onSubmit={dataInputs} className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-black rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@gmail.com"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-black dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-black rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-black dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-black dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <Link
                  href="#"
                  className="text-sm hover:text-myTheme font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </Link>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-black active:bg-myTheme  font-medium rounded text-sm px-5 py-2.5 text-center "
              >
                Login
              </button>
              <p className="text-sm font-light text-black dark:text-gray-400">
                Don’t have an account yet?{" "}
                <Link
                  to="/SiginUp"
                  className="font-medium text-black hover:text-myTheme text-primary-600 hover:underline "
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;