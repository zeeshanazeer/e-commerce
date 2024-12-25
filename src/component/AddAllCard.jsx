import React from 'react';
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import ReactStars from 'react-stars';
import { Link } from 'react-router-dom';

function AddAllCard({
    off,
    image,
    price,
    titlename,
    del,
    value,
    id,
}) {
    return (
        <>
          <Link id={id} to={`/ProductDitail/${id}`}>
              <div className="group gap-2 flex flex-col relative w-full sm:w-64 h-[300px] sm:h-[380px]">
                  <div className="bg-[#F5F5F5] w-full h-[250px] sm:w-64 sm:h-60">
                      {off && (
                          <div className="discount absolute top-3 left-3 bg-red-600 w-14 h-6 rounded flex items-center text-xs justify-center text-white">
                              {off}
                          </div>
                      )}
                      <div className="flex justify-center mt-7">
                          <img
                              src={image}
                              alt="product img"
                              className="m-auto group-hover:scale-110 transition-all duration-300 w-32 sm:w-40"
                          />
                          <div className="absolute ml-36 sm:ml-56 top-2">
                              <CiHeart/>
                              <MdOutlineRemoveRedEye/>
                          </div>
                      </div>
                  </div>

                  <div className="bg-white p-3 sm:left-3 sm:p-4">
                      <button className="group-hover:bg-black text-white bg-white hover:text-[#F5F5F5] h-10 w-full sm:w-[250px] font-medium text-lg">
                          Add
                      </button>
                      <h3 className="font-medium group-hover:text-primary transition-all duration-300 m-0 text-sm sm:text-base">
                          {titlename}
                      </h3>

                      <p className="m-0 text-sm sm:text-base">
                          <span className="text-red-600">{price}</span> <span className="line-through">{del}</span>
                      </p>

                      <div className="star-img sm:block hidden bg-amber-">
                            <ReactStars
                                count={5}
                                value={value || 3}
                                size={24}
                                edit={false}
                                color2={"#ffd700"}
                            />
                        </div>
                        <div className="star-img sm:hidden block bg-amber-">
                            <ReactStars
                                count={5}
                                value={value || 3}
                                size={12}
                                edit={false}
                                color2={"#ffd700"}
                            />
                        </div>
                  </div>
              </div>
          </Link>
      </>
    );
}

export default AddAllCard;
