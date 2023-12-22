import React, { useEffect, useState } from "react";
import axios from "axios";
import CardTotal from "../components/CardTotal";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const navigate = useNavigate();
  const [catchdata, setCatchData] = useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get(process.env.REACT_APP_URL);
      setCatchData(response.data);
    } catch (err) {
      alert(err);
    }
  };

  const handleRemove = async (id) => {
    await axios.delete(`${process.env.REACT_APP_URL}/${id}`);
    getProducts();
  };

  const handlePlus = async (currenQuantity, id) => {
    try {
      const updatequantity = currenQuantity + 1;
      await axios.put(`${process.env.REACT_APP_URL}/${id}`, {
        productquantity: updatequantity,
      });
      getProducts();
    } catch (err) {
      if (err.response && err.response.status === 429) {
        alert("Too many requests. Please try again later.");
      }
    }
  };

  const handleMinus = async (currenQuantity, id) => {
    try {
      const updatequantity =
        currenQuantity > 1 ? currenQuantity - 1 : currenQuantity;
      await axios.put(`${process.env.REACT_APP_URL}/${id}`, {
        productquantity: updatequantity,
      });
      getProducts();
    } catch (err) {
      if (err.response && err.response.status === 429) {
        alert("Too many requests. Please try again later.");
      }
    }
  };

  const singleProductTotal = (proprice, proquantity) => {
    return proprice * proquantity;
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="flex gap-5 px-10 pt-10  flex-wrap mx-auto justify-center product-list">
      {catchdata.length === 0 ? (
        <p>No Products...</p>
      ) : (
        catchdata.map((item, index) => {
          const {
            productimage,
            productname,
            productprice,
            productquantity,
            id,
          } = item;
          const totalPrice = singleProductTotal(productprice, productquantity);

          return (
            <div className="w-80 bg-white shadow rounded" key={index}>
              <img
                className="h-48 w-full border border-blue-200 flex flex-col justify-between p-4 bg-cover bg-center"
                src={productimage}
                alt={productname}
              />
              <div className="p-4 flex flex-col items-center">
                <h1 className="text-gray-800 text-center mt-1">
                  {productname}
                </h1>
                <p className="text-center text-gray-800 mt-1">
                  {productprice}$
                </p>
                <div className="inline-flex items-center mt-2">
                  <button
                    className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200"
                    onClick={() => handleMinus(productquantity, id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 12H4"
                      />
                    </svg>
                  </button>
                  <div className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
                    {productquantity}
                  </div>
                  <button
                    className="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200"
                    onClick={() => handlePlus(productquantity, id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </button>
                </div>
                <p>Product Total: {totalPrice}$</p>
                <button
                  className="bg-green-200 rounded-lg px-3 p-1"
                  onClick={() => navigate(`/productlist/${id}`)}
                >
                  Details
                </button>
                <button
                  className="py-2 px-4 bg-red-500 text-white rounded disabled:opacity-50 mt-4 w-full flex items-center justify-center"
                  onClick={() => handleRemove(id)}
                >
                  Remove
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          );
        })
      )}
      <div>{catchdata.length !== 0 && <CardTotal catchdata={catchdata} />}</div>
    </div>
  );
};
export default ProductList;
