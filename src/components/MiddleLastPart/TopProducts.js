import React, { useState, useEffect } from "react";

const TopProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("generated.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);

  return (
    <div className="grid">
      <div className=" ">
        <div className="flex flex-wrap justify-between  items-center w-full p-3 ">
          <p className="text-lg font-medium">Top Product</p>
          <div className="collapse collapse-arrow">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-dark   peer-checked:bg-dark peer-checked:text-black flex justify-start items-center text-lg ">
              <div className="">
                <p className="text-lg text-gray-500  font-medium">Monthly</p>
              </div>
            </div>
          </div>
        </div>
        {products?.map((product) => (
          <div
            key={product?.id}
            className="text-start mt-8 p-2 flex flex-wrap justify-between gap-1"
          >
            <div className="bg-blue-500  text-white font-medium rounded-xl p-2 flex justify-center items-center">
              <p className="mr-1 ml-1">{product?.hashtag}</p>
            </div>
            <div>
              <p className="text-gray-500 ">{product?.name}</p>
              <p className="font-medium">
                $ <span>{product?.price}</span>
              </p>
            </div>
            <div className="">
              <p className="bg-gray-300 rounded-3xl pl-2 pr-2 font-medium">
                {product?.sell}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;
