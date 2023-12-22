import React from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  return (
    <div>
      <main className="main">
        <div className="welcome">
          <h1 className="text-3xl  text-black">
            Welcome to Elektro Mart Shopping
          </h1>
          <div className="buttonDiv flex gap-3 mx-auto justify-center my-5">
            <button
              className="bg-white px-3 py-3 text-black rounded-lg"
              onClick={() => navigate("/newproduct")}
            >
              Add New Product
            </button>
            <button
              className="bg-[#135059] rounded-lg px-3 py-3"
              onClick={() => navigate("/productlist")}
            >
              See Products
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
