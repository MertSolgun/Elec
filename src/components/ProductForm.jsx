import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const ProductForm = () => {
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    const { value, name, type } = e.target;
    const stringToNumeric = type === "number" ? parseFloat(value) : value;
    setData((prevData) => ({
      ...prevData,
      [name]: stringToNumeric,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !data.productname ||
      data.productname.trim() === "" ||
      !data.productimage ||
      data.productimage.trim() === "" ||
      !data.productprice ||
      data.productprice === "" ||
      !data.productquantity ||
      data.productquantity === ""
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "All fields are required!",
      });
    } else if (data.productimage && !data.productimage.includes("https://")) {
      Swal.fire({
        icon: "warning",
        title: "Please enter a valid url.!",
      });
    } else {
      Swal.fire({
        title: "Sweet!",
        text: "The product has been added successfully.",
        imageUrl: data.productimage,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
      });
      setData({
        productname: "",
        productprice: "",
        productquantity: "",
        productimage: "",
        productdetails: "",
      });
      productPost();
    }
  };

  const productPost = async () => {
    try {
      await axios.post(process.env.REACT_APP_URL, data);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className="productForm">
      <div className="w-full max-w-lg mx-auto">
        <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4 space-y-10">
          <h1 className="text-white text-3xl text-center">New Product</h1>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="productname"
            >
              Product Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="productname"
              type="text"
              name="productname"
              value={data.productname}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="productprice"
            >
              Product Price
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="productprice"
              type="number"
              name="productprice"
              value={data.productprice}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="productquantity"
            >
              Product Quantity
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="productquantity"
              value={data.productquantity}
              type="number"
              name="productquantity"
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="productimage"
            >
              Product Image
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="productimage"
              type="url"
              name="productimage"
              value={data.productimage}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="productimage"
            >
              Product Details
            </label>
            <textarea
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="productdetails"
              type="url"
              name="productdetails"
              value={data.productdetails}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={handleSubmit}
            >
              Save To New Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
