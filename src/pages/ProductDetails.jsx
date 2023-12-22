import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [details, setDetails] = useState({});
  const { id } = useParams();

  const getDetails = async () => {
    try {
      const response = await axios(`${process.env.REACT_APP_URL}/${id}`);
      setDetails(response.data);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div className="product-details">
      <div className="max-[600px]:w-[400px] w-[550px]  mx-auto ">
        <img
          className="h-[500px] w-full  object-contain   flex flex-col justify-between p-4  bg-center"
          src={details?.productimage}
        />
        <div className="p-4 flex bg-red- flex-col items-center">
          <h1 className="text-gray-800 text-center mt-1">
            {details?.productdetails}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
