import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { duplicatedProducts } from "./Product";  

const ProductDetails = () => {
  const { id } = useParams();
  const [selectedColor, setSelectedColor] = useState("");
  const [amount, setAmount] = useState();

   
  const product = duplicatedProducts.find(
    (product) => product.id === parseInt(id, 10)
  );

  if (!product) {
    return <p>Product not found</p>;
  }

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleAddToBag = () => {
    console.log("Added to bag:", { selectedColor, amount });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-md-4">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid"
            style={{ width: "100%", height: "300px", objectFit: "cover" }}
          />
        </div>
        <div className="col-12 col-md-8 mt-5">
          <h3>{product.title}</h3>
          <h4 className="fs-5 fw-bold">${product.price.toFixed(2)}</h4>
          <p>{product.description || "No description available."}</p>
          <div className="container mt-4">
            <h5>Colors</h5>
            <div className="mb-3">
              <button
                className={`btn ${
                  selectedColor === "green" ? "border-2 border-dark" : ""
                } p-0 rounded-circle me-2 mt-4`}
                onClick={() => handleColorChange("green")}
                style={{
                  backgroundColor: "green",
                  width: "30px",
                  height: "30px",
                }}
              ></button>
              <button
                className={`btn ${
                  selectedColor === "blue" ? "border-2 border-dark" : ""
                } p-0 rounded-circle mt-4`}
                onClick={() => handleColorChange("blue")}
                style={{
                  backgroundColor: "blue",
                  width: "30px",
                  height: "30px",
                }}
              ></button>
            </div>

            <h5>Amount</h5>
            <div className="">
              <select
                className="form-select w-50 mb-5"
                value={amount}
                onChange={handleAmountChange}
              >
                {[...Array(20).keys()].map((i) => (
                  <option key={i} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>

            <div className="">
              <button
                onClick={handleAddToBag}
                className="btn"
                style={{
                  backgroundColor: "#5F3F91",
                  color: "white",
                  borderRadius: "0.25rem",
                }}
              >
                ADD TO BAG
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
